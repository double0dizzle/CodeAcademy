// Update state with this.setstate
// A component can do more than just read its own state. A component can also change its own state.

// A component changes its state by calling the function this.setState().

// this.setState() takes two arguments: an object that will update the component's state, and a callback. You basically never need the callback.

// In the code editor, take a look at Example.js. Notice that <Example /> has a state of:

// {
//   mood:   'great',
//   hungry: false
// }
// Now, let's say that <Example /> were to call:

// this.setState({ hungry: true });
// After that call, here is what <Example />'s state would be:

// {
//   mood:   'great',
//   hungry: true
// }
// The mood part of the state remains unaffected!

// this.setState() takes an object, and merges that object with the component's current state. If there are properties in the current state that aren't part of that object, then those properties remain how they were.


// Call this.setState from Another Function
// The most common way to call this.setState() is to call a custom function that wraps a this.setState() call. .makeSomeFog() is an example:

// class Example extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { weather: 'sunny' };
//     this.makeSomeFog = this.makeSomeFog.bind(this);
//   }

//   makeSomeFog() {
//     this.setState({
//       weather: 'foggy'
//     });
//   }
// }
// Notice how the method makeSomeFog() contains a call to this.setState().

// You may have noticed a weird line in there:

// this.makeSomeFog = this.makeSomeFog.bind(this);
// This line is necessary because makeSomeFog()'s body contains the word this. We'll talk about it more soon!

// Let's walk through how a function wrapping this.setState() might work in practice. In the code editor, read Mood.js all the way through.

// Here is how a <Mood />'s state would be set:

// A user triggers an event (in this case a click event, triggered by clicking on a <button></button>).

// The event from Step 1 is being listened for (in this case by the onClick attribute on line 20).

// When this listened-for event occurs, it calls an event handler function (in this case, this.toggleMood(), called on line 20 and defined on lines 11-14).

// Inside of the body of the event handler, this.setState() is called (in this case on line 13).

// The component's state is changed!

// Due to the way that event handlers are bound in JavaScript, this.toggleMood() loses its this when it is used on line 20. Therefore, the expressions this.state.mood and this.setState on lines 7 and 8 won't mean what they're supposed to... unless you have already bound the correct this to this.toggleMood.

// That is why we must bind this.toggleMood to this on line 8.

// For an in-depth explanation of this kind of binding trickery, begin with the React docs. For the less curious, just know that in React, whenever you define an event handler that uses this, you need to add this.methodName = this.methodName.bind(this) to your constructor function.

// Look at the statement on line 12. What does that do?

// Line 12 declares a const named newMood equal to the opposite of this.state.mood. If this.state.mood is "good", then newMood will be "bad," and vice versa.

// A <Mood /> instance would display "I'm feeling good!" along with a button. Clicking on the button would change the display to "I'm feeling bad!" Clicking again would change back to "I'm feeling good!," etc. Try to follow the step-by-step walkthrough in Mood.js and see how all of this works.

// One final note: you can't call this.setState() from inside of the render function! We'll explain why in the next exercise.

import React from 'react';
import ReactDOM from 'react-dom';

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props){
    super(props);
    this.state = { color: green };
    this.changeColor = this.changeColor.bind(this);
  }
  
  changeColor(){
    const newColor = this.state.color == green ? yellow : green;
    this.setState({ color: newColor });
  }
  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button onClick={this.changeColor}>
  Change color
</button>
      </div>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById('app'));