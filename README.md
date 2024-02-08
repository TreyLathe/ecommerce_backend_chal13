# eCommerce Backend 
Table of Contents:
- [User Story/Challenge Goal](#user-storychallenge-goal)
- [Resources Used & Credits](#resources-user--credits)
- [Relevant Links](#relevant-links)
- [Screenshots & Screencasts](#screenshots--screencasts)
- [Usage and Comments](#usage--comments)
- [Future Direction and Contributing](#future-directions-and-contributing)
- [Tests](#tests)

## USER STORY/CHALLENGE GOAL:
 Our challenge is to build the back end for an e-commerce site. Take a working Express.js API and configure it to use Sequelize to interact with a MySQL database.

 AS A manager at an internet retail company I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

## RESOURCES USED && CREDITS:
- Starter code: https://github.com/coding-boot-camp/fantastic-umbrella
- Instructor help with Put routes, insomnia
- Class instruction code as reference


## RELEVANT LINKS:
- Repository: https://github.com/TreyLathe/ecommerce_backend_chal13

- Deployed Site:  N/A

## SCREENSHOTS &&/|| SCREENCASTS:
- Screencast: 

## RELEVANT LINKS:
- Repository: https://github.com/TreyLathe/teams_problem_solution

- Deployed Site:  

## SCREENSHOTS &&/|| SCREENCASTS:

- Screencast of route codes and Insomnia test: https://app.screencastify.com/v3/watch/6PuUgmrp70J4ahjH5qe3

## USAGE && COMMENTS:
>GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize

.env file and connection.js file added and correctly connect to database.

>WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data

schema.sql and seed data are correctly called to seed with test data when 'npm seed'

>WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database

When command line "node server.js" is entered, server is started at localhost:3001 and synced to MySQL database

>WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON

API Get routes display json data for categories, products and tags in Insomnia

>WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database

API POST, PUT and DELETE routes successfully create, update and delete data from the database for categories, products and tags.

## FUTURE DIRECTIONS AND CONTRIBUTING

-  


## TESTS

Currently, no Jest tests, console logs and Insomnia help with testing, type node server.js in appropriate directory to test functionality of application
