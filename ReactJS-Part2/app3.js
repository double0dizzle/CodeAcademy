// Pass a Component's State
// A <Parent /> is supposed to pass its state to a <Child />.

// Before a <Parent /> can pass anything to a <Child />, you need to import Child into Parent.js.

// Instructions
// 1.
// To import a local component, we will need to modify our import syntax to use local files and named exports. For example, if we wanted to import a component called ComponentName from a local file called Component.js we would write

// import { ComponentName } from './Component'
// On line 3, import the Child component from Child.js.

// Parent.js and Child.js share the same parent directory.

// 2.
// Great! Now Parent is ready to pass its state to a <Child />.

// Inside of Parent's .render() method's return statement, get rid of the <div></div>.

// Replace it with a <Child /> instance.

// Give <Child /> an attribute with a name of name. The attribute's value should be the name property stored in this.state.

// 3.
// All that's left is to render your components!

// At the bottom of Parent.js, call ReactDOM.render();.

// For ReactDOM.render()'s first argument, pass in <Parent />.

// For ReactDOM.render's second argument, pass in document.getElementById('app').

// Rendering <Parent /> will render both components, because Parent's render function returns a <Child />. Click Run, and see the rendered information that you passed down from Parent.



import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child'


class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Frarthur' };
  }

  render() {
    return <Child name={this.state.name}/>;
  }
}

ReactDOM.render(<Parent />, document.getElementById('app'));



// Don't Update props
// Great work! You just passed information from a stateful component to a stateless component. You will be doing a lot of that.

// You learned earlier that a component can change its state by calling this.setState(). You may have been wondering: how does a component change its props?

// The answer: it doesn't!

// A component should never update this.props. Look at Bad.js to see an example of what not to do.

// This is potentially confusing. props and state store dynamic information. Dynamic information can change, by definition. If a component can't change its props, then what are props for?

// A React component should use props to store information that can be changed, but can only be changed by a different component.

// A React component should use state to store information that the component itself can change.

// If that's a bit confusing, don't worry! The next two lessons will be examples.