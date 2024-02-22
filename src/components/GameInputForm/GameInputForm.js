import React from 'react';

function GameInputForm() {

const [textInput, setTextInput] = React.useState("");

  return <div>
    <form class="guess-input-wrapper">
      <label for="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" minLength="5" value={textInput} onChange={(event) => {
        setTextInput(event.target.value.toUpperCase());
        console.log(event.target.value.toUpperCase());
        }} 
      />
    </form>
  </div>;
}

export default GameInputForm;
