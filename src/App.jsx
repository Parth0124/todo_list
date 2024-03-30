/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Todolist from './components/Todolist';
import Footer from './components/Footer';

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [priority, setPriority] = useState("high");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const options = {day:'numeric', month: 'long', year: 'numeric', };
    setCurrentDate(date.toLocaleDateString('en-US', options));
  }, []);

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function addItem() {
    setItems((prevItems) => [
      ...prevItems,
      { text: inputText, completed: false, priority: priority, highlighted: true },
    ]);
    setInputText(""); // Clear the input field after adding the item
  }
  
  const onSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    addItem(); // Call the addItem function to add the item
  };
  

  function toggleCompletion(index) {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index].completed = !newItems[index].completed;
      return newItems;
    });
  }

  function clearCompleted() {
    setItems((prevItems) => prevItems.filter((item) => !item.completed));
  }

  const remainingCount = items.filter((item) => !item.completed).length;

  return (
    <div className="container">
      <Header currentDate={currentDate}/>
      <Form inputText={inputText} setPriority={setPriority} handleChange={handleChange} onSubmit={onSubmit} addItem={addItem}/>
      <Todolist items={items} toggleCompletion={toggleCompletion}/>
      <Footer clearCompleted={clearCompleted} remainingCount={remainingCount}/>
    </div>
  );
}

export default App;
