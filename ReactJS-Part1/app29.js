// Component Class Instructions
// Let's review what you've learned so far! Find each of these points in app.js:

// On line 1, import React from 'react' creates a JavaScript object. This object contains properties that are needed to make React work, such as React.createElement() and React.Component.

// On line 2, import ReactDOM from 'react-dom' creates another JavaScript object. This object contains methods that help React interact with the DOM, such as ReactDOM.render().

// On line 4, by subclassing React.Component, you create a new component class. This is not a component! A component class is more like a factory that produces components. When you start making components, each one will come from a component class.

// Whenever you create a component class, you need to give that component class a name. That name should be written in UpperCamelCase. In this case, your chosen name is MyComponentClass.

// Something that we haven't talked about yet is the body of your component class: the pair of curly braces after React.Component, and all of the code between those curly braces.

// Like all JavaScript classes, this one needs a body. The body will act as a set of instructions, explaining to your component class how it should build a React component.

// Here's what your class body would look like on its own, without the rest of the class declaration syntax. Find it in app.js:

// {
//   render() {
//     return <h1>Hello world</h1>;
//   }
// }
// That doesn't look like a set of instructions explaining how to build a React component! Yet that's exactly what it is.

// Click Next, and we'll go into how these instructions work.

import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

ReactDOM.render(
	<MyComponentClass />, 
	document.getElementById('app')
);


// The Render Function
// A component class is like a factory that builds components. It builds these components by consulting a set of instructions, which you must provide. Let's talk about these instructions!

// For starters, these instructions should take the form of a class declaration body. That means that they will be delimited by curly braces, like this:

// class ComponentFactory extends React.Component {
//     // instructions go here, between the curly braces
// }
// The instructions should be written in typical JavaScript ES2015 class syntax.

// There is only one property that you have to include in your instructions: a render method.

// A render method is a property whose name is render, and whose value is a function. The term "render method" can refer to the entire property, or to just the function part.

// class ComponentFactory extends React.Component {
//   render() {}
// }
// A render method must contain a return statement. Usually, this return statement returns a JSX expression:

// class ComponentFactory extends React.Component {
//   render() {
//     return <h1>Hello world</h1>;
//   }
// }
// Of course, none of this explains the point of a render method. All you know so far is that its name is render, it needs a return statement for some reason, and you have to include it in the body of your component class declaration. We'll get to the 'why' of it soon!

import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component{
  render() {
    return <h1>Hello world</h1>;
  }
}