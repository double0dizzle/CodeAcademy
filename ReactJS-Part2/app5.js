// Pass the Event Handler
// In the last exercise, you defined a function in Parent that can change Parent's state.

// Parent must pass this function down to Child, so that Child can use it in an event listener on the dropdown menu.

// Instructions
// 1.
// We now need to make sure that the .changeName() method will always refer to the instance of Parent, even when we pass it down to Child to use.

// In the constructor method of Parent, bind this.changeName to the current value of this and store it in this.changeName.

// 2.
// Pass .changeName() down to Child!

// In Parent.js, inside of Parent's render function, add a second attribute to <Child />. Give this attribute a name of onChange, and a value of the changeName method.



import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.changeName = this.changeName.bind(this);
    this.state = { name: 'Frarthur' };
  }

  render() {
    return <Child name={this.state.name} onChange={this.changeName}/>
  }
    changeName(newName) {
      this.setState({
        name: newName
      });
    }
}

ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);