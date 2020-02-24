# Project Name

React Gallery
[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

The React Gallery project consisted of creating an application that displays a gallery of pictures that are most important to me. This application also allows interaction for the user through clickable images that display the image description and image upon click, as well as the option to like an image by clicking on a "Like" button. 

This application consisted of three components that were used to pass values through props using React:
- App: Represents the overall application of the site
- GalleryList: Represents the gallery of images
- GalleryItem: Represents a single image within the gallery as well as the user interaction to view the image description or like an image

The images displayed on this application are being stored in an "images" folder within the project folder and the image data is being added manually within a separate data file located in the project folder as well. 

## Approach

The approach I took to this project was to start with testing the GET and PUT server routes in Postman. Then, I selected images to use for this project, placed image files within the Images folder and entered the data for each image within the Gallery Data file. Following adding images, I ran my server code in the terminal and made sure I could get the server and client up and running. After this step, I set up my component files and functionality on the client side. Serve side functionality was set up prior to forking and cloning the project's repository.

Once all my functionality was set up, tested and working, I approached CSS styling, adding a separate stylesheet for my GalleryList component. This stylesheet holds the grid style of the images displayed on the site to allow the images to appear side-by-side with one another. 

## Prerequisites

- Nodemon
- React 
- Express
- Body-Parser
- Postico
- Postgres

## Installation
1. If you don't have Nodemon installed, install it globally within your terming using the command "npm install nodemon --global
2. Run "npm install" in terminal
3. Run "nom run server" in terminal
4. Open a second terminal window, since we are using nodemon, and run "npm run client" in the new terminal window

## How to Use Application
1. On page load, a grid of images should appear on the page
2. Click on any image on the page to display the image description. You can also click the image block again to display the image again.
3. If you like an image, feel free to click the "Like" button below the image. Once the button is clicked, the number of "likes" will increment below the image. 


