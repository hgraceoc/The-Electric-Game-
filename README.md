## Five A Side Random Team Generator
Final project for Develop Me Bootcamp to create a random 5-a-side Team Generator 

## To view the project:

A live version can be accessed at:

Otherwise to run the project using NPM, follow these steps:

- NPM and a Command Line tool is needed.
- git clone this repo
- run npm install
- run npm start to view on localhost:3000

## The brief 
The core of the challenge is to create a tool which randomly picks 5-a-side football teams from a list of 10 names.

## Tools I have used 
React, Redux, CSS, HTML, JSX, JavaScript, Git

I chose to to use React as I enjoyed using it during the Develop Me Bootcamp and wanted to build on my understanding of how it works.

I included redux, as although it would not have been neccersary to achieve my MVP (Minimum Viable Product), I considered that for future functionality - it may be useful to have set up initially with redux, rather than to convert at a later date.

# My initial Plan 
For my MVP, I knew that I needed to achieve the following:
- Form input to accept 10 names
- Keep track of state in each input
- Record results into an array
- Split array into two random teams and display as a list 
- Display list of two teams 

Potential Extra Features:
- Be able to delete single players
- Choose Team Names
- Add nth number of players to split into teams 

I then drew out a plan of the three views I wanted to produce, and how they would link to eachother. I included in this plan, a list of components that I wanted to include 

## Initial Plan First Sketch: 

![Initial Plan ](https://user-images.githubusercontent.com/60407868/85920756-56c6bd80-b86e-11ea-97ff-41c517ebc260.jpg)


## Refactoring the plan 
It was a lesson to me after Day 2, that by setting out such a list of components - I had overcomplicated things for myself. I decided then to strip it back to a single component, which I could then divide up at a later date if neccersary 


## Design & Layout 
For my design, I knew that I wanted three views
- Home
- Input Form 
- Team Tables 

## Decisions Made About Design Schem
-Layout to be simple and consitent, so the team table and the form have very similar layouts. 

-Background to be a collage of old football photos (more tonal/muted colours than full colour images)

-Overlaying div that the user engages with to be centered, and tonal (i.e. all one colour with different tones represent activity, such as button hover changing from a darker yellow to a lighter yellow)

-Divs to have rounded edges, which will be echoed in font choice 

-Yellow as base colour (I think this is vaguely neutral)

# What I would like to work on:
Inevitably, I ran out of time to make all the changes that I wanted to
But I would like to include

## For User Experience Purposes
- Display a scroll bar at all times on the form, to make the action more clearly available 
- Include 

## For Functionality 
- To allow n number of players - I also think this would be beneficial to the user experience. At the moment, the 'Randomise Teams' Button only appears once ten players are entered, which I don't think is entirely clear.

# Views

## Landing Page 
<img width="1000" alt="Home" src="https://user-images.githubusercontent.com/60407868/85920757-5af2db00-b86e-11ea-8457-1ab5a59a411f.png">

# Player Input Form 
<img width="1000" alt="Select" src="https://user-images.githubusercontent.com/60407868/85920758-5dedcb80-b86e-11ea-8a1d-c17ea55786cc.png">

## Team Tables
<img width="1000" alt="Teams" src="https://user-images.githubusercontent.com/60407868/85920989-765ee580-b870-11ea-93c0-cdb4c7cb52a1.png">










## React 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
