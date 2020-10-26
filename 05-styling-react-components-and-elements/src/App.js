import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';
// import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green '};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen '};
    color: black;
  },
`;

class App extends Component {
  state = {
    persons: [
      { id: 'a1', name: 'Max', age: 28 },
      { id: 'a2', name: 'Manu', age: 29 },
      { id: 'a3', name: 'Stephanie', age: 26 },
    ],
    otherState: 'Some other value',
    showPersons: false,
  };

  // Event handlers
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // const person = Object.assign({}, this.state.persons[personIndex]) // Old method
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice(); // Old method
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1); // Remove one element from the array
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    // Inline style
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      },
    };

    let persons = null;

    // If true
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    // let classes = ['red', 'bold'].join(' '); // 'red bold'
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      // <StyleRoot>
      <div className="App">
        <h1>Hello, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        {/* <button style={style} onClick={this.togglePersonsHandler}> */}
        {/* <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}> */}
        <button className="button" onClick={this.togglePersonsHandler}>
          Toggle Persons
        {/* </StyledButton> */}
        </button>
        {persons}
      </div>

      // </StyleRoot>
    );
  }
}

// export default Radium(App);
export default App;