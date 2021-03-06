// Apply a Component in a Render Function
// This is new territory! You've never seen a component rendered by another component before.

// You have seen a component rendered before, though, but not by another component. Instead, you've seen a component rendered by ReactDOM.render().

// When a component renders another component, what happens is very similar to what happens when ReactDOM.render() renders a component.



import React from 'react';
import ReactDOM from 'react-dom';
import {NavBar} from './NavBar';


class ProfilePage extends React.Component {
  render() {
    return (
      <div>
      <NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}