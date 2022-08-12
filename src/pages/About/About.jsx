import React from 'react'

function About() {
  return (
    <div>
      <h1>About</h1>
      <div>
        Follow the instructions in the webpack documentation to set up a new project, then follow the installation instructions above to install React Router in your project.
        Setting up a new React project in webpack is a bit more involved than Parcel or Create React App. Because webpack is a low-level tool that allows you to fine-tune your build to your liking, you may want to read the webpack documentation or check out webpack configurations in other repos to understand how to build your own.
        Once you have webpack configured and the necessary dependencies installed, somewhere in your code (probably towards the root of your React component tree) you can import the modules you need from react-router-dom.
      </div>
    </div>
  )
}

export default About