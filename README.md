# Gametopia!

## This is a project that I created as a fun way for my friends and I to discover, browse and catalog highly-rated, popular games.

### Through using tools such as the IGDB REST API (with OAuth authorization code flow), ReactJS, NextJS, Typescript, HTML, Tailwind CSS and Visual Studio Code. I was able to create and run a local host with multiple pages, with the help of NextJS server-side rendering properties and ReactJS Hooks. 

### Here is the description:

----------------------------------------

### Page 1: Top 15 Games

This page includes data fetched (server-side) from the IGDB API, mostly consisting of the images' covers, titles, description, rating, critic rating, rating count and screenshots. 

This page consisted a ranking of the games on a left side in a chart. And a main panel where there is a slideshow of games that you can select from the chart on the left of the screen (or press arrows beside main panel).

When you select a game, on the right hand side there will a section, showing you screenshots from the game, companies involved, release date, title and a short summary of the game. 

This is a dynamic page for the sole purpose of getting to know all about the Top 15 Games right now.

----------------------------------------

### Page 2: Genres

This page included games, fetched from the same API and sorted into genres. 

When you click the Genres page on the top of the screen consisting of all the pages, you get a dropdown box of the various options of genres. Including: Role-playing games, Racing, Turn-based strategy, Sports.

Once the user clicks on one of these genres, they are brought to a page full of games, with their names and covers. 

This is displayed in a clean fashion using Tailwind CSS and ReactJS custom hooks to make it dynamic.

Once one of the games is clicked on, it takes you to a new page with just the seleted game panel and all the specific details including, summary and screenshots from the game.

----------------------------------------

### Page 3: Guess the game

This page includes a mini-game to test the knowledge of users on existing video games. Consisting of an interactive keyboard, guess panel, # of tries and hint buttons in case the user struggles.

The game follows the vibe of a hangman-esque web game but with users guessing random games instead of random words.

The games are chosen at random and the users will have 5 tries to attempt for an accurate guess. When this happens the game is then revealed to the user.

If the user struggles to guess the game, they are able to click one of the two hints, that reveal either the companies the game is made by, or the genre that the game exists in. This way, the users are able to increase their knowledge of games. 

----------------------------------------



