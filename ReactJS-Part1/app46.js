// Render Different UI Based on props
// Awesome! You passed a prop from a component to a different component, accessed that prop from the receiver component, and rendered it!

// You can do more with props than just display them. You can also use props to make decisions.

// In the code editor, look at the Welcome component class.

// You can tell from this.props.name on line 5 that Welcome expects to receive a piece of information called name. However, Welcome never renders this piece of information! Instead, it uses the information to make a decision.

// <Welcome /> instances will render the text WELCOME "2" MY WEB SITE BABYYY!!!!!, unless the user is Mozart, in which case they will render the more respectful
// hello sir it is truly great to meet you
// here on the web.

// The passed-in name is not displayed in either case! The name is used to decide what will be displayed. This is a common technique.



import React from 'react';
import ReactDOM from 'react-dom';
import { Greeting } from './Greeting';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="Alison" signedIn={true}/>
        <article>
          Latest:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);