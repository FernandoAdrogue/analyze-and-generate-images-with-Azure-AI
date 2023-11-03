import React from 'react';

function App() {
  const [inputValue, setInputValue] = React.useState("");
  //const [cursorPosition, setCursorPosition] = React.useState(0);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // const handleInputFocus = (event) => {
  //   setCursorPosition(event.target.selectionStart);
  // };

  return (
    <div>
      <h1>Computer vision</h1>
      <form>
        <p>
          <label htmlFor="prompt">Insert URI, or type prompt:</label>
        </p>
        <input
          type="text"
          name="prompt"
          placeholder="Enter URL or textual prompt to generate an image"
          value={inputValue}
          onChange={handleInputChange}
          //onFocus={handleInputFocus}
        />
        <div>
          <button type="button">Analice</button>
          <button type="button">Generate</button>
        </div>
      </form>
    </div>
  );
}

export default App;
