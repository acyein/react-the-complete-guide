import React, { Component } from 'react';

import classes from './App.module.css';
import Person from './Person/Person';

// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green '};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${props => props.alt ? 'salmon' : 'lightgreen '};
//     color: black;
//   },
// `;

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
    let persons = null;
    let btnClass = '';

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

      btnClass = classes.Red;
    }

    // let classes = ['red', 'bold'].join(' '); // 'red bold'
    const assignedClasses = []; 
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hello, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;