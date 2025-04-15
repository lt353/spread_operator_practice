import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    })
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter(
        (item, index) => {
          return index !== id;
        }
      )
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div> 
      <InputArea
        onAdd={addItem} 
      />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem 
              key={index}
              id={index}
              text={todoItem} 
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;


// /*This code is all for if all we wanted to do was strike through items
// when clicked I thought it would be easier for me to start fresh with the final setup*/
// import React, { useState } from "react";
// import ToDoItem from "./TodoListItem";

// function App() {
//   // This is used to store what the user types in the input field
//   const [inputText, setInputText] = useState("");
//   // This is used to store the list of items
//   const [items, setItems] = useState([]);

//   // This function is called whenever the input field changes
//   // It updates the inputText state with the current value of the input field
//   function handleChange(event) {
//     const newValue = event.target.value;
//     setInputText(newValue);
//   }

//   // This function is called when the "Add" button is clicked
//   // It adds the current inputText to the items array
//   function addItem() {
//     setItems((prevItems) => {
//       return [...prevItems, inputText];
//     })
//     setInputText(""); // Clear the input field after adding the item
//   }

//   return (
//     <div className="container">
//       <div className="heading">
//         <h1>To-Do List</h1>
//       </div>
//       <div className="form">
//         {/* This is the input field where the user types their to-do item */}
//         <input 
//           value={inputText} 
//           onChange={handleChange}
//           type="text" 
//         />
//         {/* This is the button that adds the item to the list */}
//         <button onClick={addItem}>
//           <span>Add</span>
//         </button>
//       </div>
//       <div>
//         <ul>
//           {/* This is where the list of items is displayed with the help of the map function */}
//           {/* Each item in the items array is displayed as a list item */}
//           {items.map((todoItem) => (
//             <ToDoItem 
//               text={todoItem} 
//             />
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App; */
