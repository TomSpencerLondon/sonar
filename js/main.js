$(window).ready(function () {


  $('#search-location').on('click', function (e) {
    e.preventDefault()
    // let apiSearch = new apiSearch()
    const location = $('#location').val()
    const channel = $('#channel').val().toLowerCase()
    const minPrice = $('#min_price').val()
    const maxPrice = $('#max_price').val()
    placesSearch(location)
    .done(function (results){
      results = JSON.parse(results)
      const placeID = results.result.locations.elements[0].place_id;
      console.log(placeID);
      propertiesSearch(placeID, channel, minPrice, maxPrice)
      .done(function(results){
        results = JSON.parse(results)
        const properties = results.result.properties.elements
        displayHousesThumbnails(properties);
      })
    })
  });

  function placesSearch(name) {
    return $.ajax({
      url: 'https://whispering-shore-85679.herokuapp.com/places?name=' + name,
      error: function (_, _, thrownError) {
        alert(thrownError);
      }
    })
  }

  function propertiesSearch(placeID, channel, minPrice, maxPrice) {
    let queryParams = {
      place_id: placeID,
      channel: channel
    }

    if(minPrice != ""){
      queryParams.min_price = minPrice
    }
    if(maxPrice != ""){
      queryParams.max_price = maxPrice
    }

    const queryString = $.param(queryParams)
    return $.ajax({
      url: 'https://whispering-shore-85679.herokuapp.com/properties?' + queryString,
      error: function (_, _, thrownError) {
        alert(thrownError);
      }
    })
  }

  function displayHouse(property) {
    console.log("Hello")
    console.log("This is the displayHouse photo:" + property.photos[0].replace("120x90", "804x538"))

    let houseClicked = $('#house-clicked')
    houseClicked.empty()
    let newHouse = document.createElement('div')
    newHouse.className = 'house'
    propertyClicked = property.photos[0].replace("120x90", "490x327")
    newHouse.innerHTML = `
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">${property.price}</h5>
        <p class="card-text">${property.display_address}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
        <img class="card-img-top" src="http://mr3.homeflow-assets.co.uk/${propertyClicked}" alt="Card image cap">

    </div>`
                // <div class="pull-left">
                //   <h1>${property.display_address}</h1>
                // </div>
                // <a class="pull-left" href="#">
                //   <img src="http://mr3.homeflow-assets.co.uk/${propertyClicked}" class="card-img-top img-fluid">
                // </a>`
    houseClicked.append(newHouse)

  }


  function displayHousesThumbnails(properties) {
    let thumbnailsArea = $('#houses-thumbnails')
    thumbnailsArea.empty()
    for(let i = 0; i < properties.length; i++){
      const property = properties[i]
      const photoURL = property.photos[0]
      if(photoURL != undefined) {
        let propertyElement = document.createElement('div')
        propertyElement.className = 'property'
        propertyElement.innerHTML =

        `<section>
            <div class="container py-3">
              <div class="card">
                <div class="row ">
                  <div class="col-md-5">
                      <img src="http://mr3.homeflow-assets.co.uk/${photoURL}" class="card-img-top img-fluid center-block">
                  </div>
                    <div class="col-md-7">
                      <div class="card-block">
                        <h5 class="card-text">${property.price}</h5>
                        <p class="card-text">${property.display_address}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>`

        propertyElement.addEventListener("click", function (e){
          e.preventDefault()
          console.log("You clicked on:" + property.display_address);
          displayHouse(property)
        })
        thumbnailsArea.append(propertyElement)
      }
    }
  }

});
