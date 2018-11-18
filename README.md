# Clicky-Game


### Overview
Clicky-Game is an application that renders different images by listening to click events. The application keeps track of the user's score. The user's score increments when an image is clicked for the first time. The user's score gets reset to 0 if they click the same image more than once. Every time an image is clicked, the images rendered to the page shuffle themselves in a random order.Once the user's score is reset after an incorrect guess, the game restart.



axios.get("http://www.mprnews.org/").then(function( response) {
 var $ = cheerio.load(response.data); 
... }

### MPRNews Scraper is deployed to Heroku
[Click To Go To Deployed Site](??)

image



### Technologies used
* Node.js
* express NPM Package - https://www.npmjs.com/package/express
* Cheerio NPM Package - https://www.npmjs.com/package/cheerio
* Axios  NPM Package - https://www.npmjs.com/package/axios
* Morgan NPM Package - https://www.npmjs.com/package/morgan
* Mongoose NPM Package - https://www.npmjs.com/package/mongoose
