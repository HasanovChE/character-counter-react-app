import './UserInput.css';
import { useState } from 'react';

function UserInput({ onTextChange }) {
  const [text, setText] = useState("");
  const [excludeSpaces, setExcludeSpaces] = useState(false);
  const [characterLimit, setCharacterLimit] = useState(null);
  const [isLimitEnabled, setIsLimitEnabled] = useState(false);

  const handleChange = (e) => {
    let newText = e.target.value;

    if (!characterLimit || newText.length <= characterLimit) {
      setText(newText);
      onTextChange(newText, excludeSpaces);
    }
  };

  const handleExcludeSpacesToggle = () => {
    const newExcludeSpaces = !excludeSpaces;
    setExcludeSpaces(newExcludeSpaces);
    onTextChange(text, newExcludeSpaces);
  };

  const handleLimitToggle = () => {
    setIsLimitEnabled(!isLimitEnabled);
    if (!isLimitEnabled) {
      setCharacterLimit(1000); 
    } else {
      setCharacterLimit(null); 
    }
  };

  return (
    <div className="user-input-container">
      <textarea
        type="text"
        className="user-input bg-black text-white dark:bg-white dark:text-black"
        value={text}
        onChange={handleChange}
        placeholder="Type here..."
      ></textarea>

      <div className="checkboxes">
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="exclude-spaces"
            checked={excludeSpaces}
            onChange={handleExcludeSpacesToggle}
          />
          <label htmlFor="exclude-spaces" className='text-black dark:text-white'>Exclude Spaces</label>
        </div>

        <div className="checkbox-container">
          <input
            type="checkbox"
            id="character-limit"
            checked={isLimitEnabled}
            onChange={handleLimitToggle}
          />
          <label htmlFor="character-limit" className='text-black dark:text-white'>Set Character Limit</label>
        </div>

        {isLimitEnabled && (
          <input
            type="number"
            className="character-limit-input"
            value={characterLimit || ''}
            onChange={(e) => setCharacterLimit(Number(e.target.value))}
            min="1"
          />
        )}
      </div>

      {isLimitEnabled && text.length >= characterLimit && (
        <p className="warning-text">Character limit reached!</p>
      )}
    </div>
  );
}

export default UserInput;
