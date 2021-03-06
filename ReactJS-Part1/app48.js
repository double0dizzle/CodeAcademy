// Pass an Event Handler as a prop
// Good! You've defined a new method on the Talker component class. Now you're ready to pass that function to another component.

// You can pass a method in the exact same way that you pass any other information. Behold, the mighty JavaScript.



import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button talk={this.talk}/>;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);