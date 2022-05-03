# Basic Express App

### \*Create an Express App that responds to GET requests to

1. the home page (‘/’) with the words “Welcome to the page I call home”,

2. the About page (‘/about’) with some JSON object

3. the Contact page (‘/contact’) with the name of the parent directory of your server.js file

#### Next create a folder called public and inside it create an index.html file. This index.html file should contain a simple form element with action=“/” and method=“post” attributes and three input fields, one for username, one for password, and one for submitting the form. Change server.js in such a way that the server responds to a GET request to the home route by sending the index.html to the client (hint: check out res.sendFile() and express middleware express.urlencoded()).

#### Next, read about Express middleware. Using the built-in express.urlencoded() function, add a route that responds to POST requests to the home route (‘/’) with the words “Welcome, <username>!” (for some username of your choice) if the user entered <username> in the username field of the form and <password> (for some password of your choice) in the password field of the form. If the user entered an invalid username or an invalid password, the route should respond with “Login failed”.
