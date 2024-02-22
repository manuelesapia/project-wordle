import React from 'react';

function GameInputForm() {

const [textInput, setTextInput] = React.useState("");

  function handleSubmit(event){
    event.preventDefault();

    // if(textInput.length !==5){
    //   window.alert('Please enter exctaly 5 letters :)')
    // }

    console.log({ textInput });
    setTextInput('');
  }


  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input required minLength={5} maxLength={5} id="guess-input" type="text" pattern="[a-zA-Z]{5}" value={textInput} onChange={(event) => {
        const nextGuess = event.target.value.toUpperCase(); 
        setTextInput(nextGuess);
        }} 
      />
    </form>
  ) 
}

export default GameInputForm;
