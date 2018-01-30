# Sonar
## The brief
The task was to set up Sonar a property website which would interact with the Homeflow API. We had to use JavaScript, HTML, CSS and Ruby for server side applications if necessary. The challenge was to interact with an API which was well put together but lightly documented. This was an opportunity to demonstrate our skills with UX design.

## My Approach:

I felt that using the Homeflow API would provide me with interesting and useful data as well as challenge me to learn which is something I value very highly.

I used Postman to test the API and this allowed me to get visibility on the JSON objects returned. I began by considering how best to access the APIs for the best user experience with Sonar. There were two levels to the API calls. In the first place I needed to make a GET request to:
 http://index1.homeflow.co.uk/places?api_key=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX&search[name]=elstead

This, then, gave me enough information to call the properties section of the API:
 http://index1.homeflow.co.uk/properties?api_key=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX&search[place][id]=51e7c4a873dadaf60feee624&[search][channel]=sales

The first challenge was that it was necessary to build my own server in order to resolve CORS. I used a proxy API with Sinatra to overcome this.

              API 			⇒		Proxy API 		⇒		Website


On the website itself I used Ajax to make API requests to the Proxy API and JQuery to display the information dynamically on the page. This was a single page web application.

## Using the application

The application can be found here: https://murmuring-brushlands-19054.herokuapp.com/

You can also:
$ git clone https://github.com/TomSpencerLondon/sonar
$ cd proxy_API
$ run proxy.rb: 'ruby proxy.rb'
$ cd ..
$ open index.html

## If I had more time...I would include:
* Effective testing for API calls
* Cleaner design of main.js and more separation of concerns
* More comprehensive planning for UX design. For example I would like to implement a fix for selected house image so that it stays in the middle of the screen when the user scrolls.
