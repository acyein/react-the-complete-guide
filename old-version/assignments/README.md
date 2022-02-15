# Assignment 01

1. Create TWO new components: UserInput and UserOutput
2. UserInput should hold an input element, UserOutput two paragraphs
3. Output multiple UserOutput components in the App component (any paragr aph texts of your choice)
4. Pass a username (of your choice) to UserOutput via props and display it there
5. Add state to the App component (=> the username) and pass the username to the UserOutput component
6. Add a method to manipulate the state (=> an event-handler method)
7. Pass the event-handler method reference to the UserInput component and bind it to the input-change event
8. Ensure that the new input entered by the user overwrites the old username passed to UserOutput
9. Add two-way-binding to your input (in UserInput) to also display the starting username
10. Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets

# Assignment 02

1. Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).
2. Create a new component (=> ValidationComponent) which receives the text length as a prop
3. Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)
4. Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
5. Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.
6. When you click a CharComponent, it should be removed from the entered text.

Hints:

- Keep in mind that JavaScript strings are basically arrays!
- You'll also need to transform a string into a real array and then join it back into a string again to complete task 5 of the assignment.
- You can split a string into an array of its characters with the split('') method. By passing just an empty string, it's split after every character.
- You may then re-create a string from that array by using join('') - again, joining with an empty string as a separator.
