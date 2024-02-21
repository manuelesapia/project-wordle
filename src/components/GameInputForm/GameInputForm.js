import React from 'react';

function GameInputForm() {
  return <div>
    <form class="guess-input-wrapper">
      <label for="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" />
    </form>
  </div>;
}

export default GameInputForm;
