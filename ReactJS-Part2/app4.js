// Child Components Update Their Parents' state
// In the last lesson, you passed information from a stateful, parent component to a stateless, child component.

// In this lesson, you'll be expanding on that pattern. The stateless, child component will update the state of the parent component.

// Here's how that works:

// 1

// The parent component class defines a method that calls this.setState().

// For an example, look in Step1.js at the .handleClick() method.

// 2

// The parent component binds the newly-defined method to the current instance of the component in its constructor. This ensures that when we pass the method to the child component, it will still update the parent component.

// For an example, look in Step2.js at the end of the constructor() method.

// 3

// Once the parent has defined a method that updates its state and bound to it, the parent then passes that method down to a child.

// Look in Step2.js, at the prop on line 28.

// 4

// The child receives the passed-down function, and uses it as an event handler.

// Look in Step3.js. When a user clicks on the <button></button>, a click event will fire. This will make the passed-down function get called, which will update the parent's state.



// Define an Event Handler
// To make a child component update its parent's state, the first step is something that you've seen before: you must define a state-changing method on the parent.

// Instructions
// 1.
// Select Child.js.

// Look at Child's render function. It's similar to the last lesson, but you can see a <select> dropdown menu that wasn't there before.

// Click Run. Try selecting different names from the dropdown menu in the browser.

// It doesn't work! When you select a name, that name is supposed to replace "Frarthur" on the screen.

// Look at line 8. Notice that the name inside of the <h1></h1> is equal to this.props.name. In order to make the dropdown menu change the <h1></h1>, you will need the dropdown menu to change the value of this.props.name!

import React from 'react';

export class Child extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names">
          <option value="Frarthur">
            Frarthur
          </option>

          <option value="Gromulus">
            Gromulus
          </option>

          <option value="Thinkpiece">
            Thinkpiece
          </option>
        </select>
      </div>
    );
  }
}