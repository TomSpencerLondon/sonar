# sonar

The task was to set up a property website which interacted with the Homeflow API. We had to use JavaScript, HTML, CSS and Ruby for server side applications if necessary. The challenge was to interact with an API which was well put together but lightly documented. This was an opportunity to demonstrate our skills with UX design.

## Challenges:

The first challenge was that it was necessary to build my own server in order to resolve CORS. I used a proxy API with Sinatra to overcome this.

              API 			⇒		Proxy API 		⇒		Website


On the website itself I used Ajax to make API requests to the Proxy API and JQuery to display the information dynamically on the page. This was a single page web application.

I used Postman to test the API and this allowed me to get visibility on the JSON objects returned. This helped me to make efficient calls to the API and return the data I needed.

There were two levels to the API calls. In the first place I needed to make a GET request to:
 http://index1.homeflow.co.uk/places?api_key=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX&search[name]=elstead

This, then, gave me enough information to call the properties section of the API:
 http://index1.homeflow.co.uk/properties?api_key=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX&search[place][id]=51e7c4a873dadaf60feee624&[search][channel]=sales

## Viewing the application:

You can use the application here: https://murmuring-brushlands-19054.herokuapp.com/
