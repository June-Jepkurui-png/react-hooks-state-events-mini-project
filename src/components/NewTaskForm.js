import React, { useState } from 'react';

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    // Reset the form after submission if needed
    setText('');
    setCategory(categories[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task:
        <input type="text" value={text} onChange={handleTextChange} />
      </label>
      <label>
        Category:
        <select value={category} onChange={handleCategoryChange}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;