import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// const App = props => {
//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Stephanie', age: 26}
//     ],
//     otherState: 'Some other value'
//   });

//   const [otherState, setOtherState] = useState('Some other value');

//   console.log(personsState, otherState);

//   const switchNameHandler = () => {
//     // console.log('Was clicked!');
//     setPersonsState({
//       persons: [
//         { name: 'Matthias', age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: 'Sally', age: 23}
//       ]
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hello, I'm a React App</h1>
//       <p>This is really working!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My Hobbies: Football</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//     </div>
//   );
// };

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26}
    ],
    otherState: 'Some other value'
  }

  // Event handler
  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // this.state.persons[0].name = 'Matthew';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Sally', age: 23}
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Sally', age: 26}
      ]
    });
  }

  render() {
    // Inline style
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hello, I'm a React App</h1>
        <p>This is really working!</p>
        {/* <button onClick={this.switchNameHandler.bind(this, 'Matthias')}>Switch Name</button> */}
        <button
          style={buttonStyle} 
          onClick={() => this.switchNameHandler()}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}  
          click={this.switchNameHandler.bind(this, 'Matthew')} 
          changed={this.nameChangedHandler} >My Hobbies: Football</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
       </div>
    );
  }
}

export default App;