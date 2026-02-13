import './UserInput.css';
import { useState } from 'react';

function UserInput({ onTextChange }) {
  const [text, setText] = useState("");
  const [excludeSpaces, setExcludeSpaces] = useState(false);
  const [characterLimit, setCharacterLimit] = useState(null);
  const [isLimitEnabled, setIsLimitEnabled] = useState(false);

  const handleChange = (e) => {
    let newText = e.target.value;

    if (!isLimitEnabled || !characterLimit || newText.length <= characterLimit) {
      setText(newText);
      onTextChange(newText, excludeSpaces);
    }
  };

  const handleExcludeSpacesToggle = () => {
    const newExcludeSpaces = !excludeSpaces;
    setExcludeSpaces(newExcludeSpaces);
    onTextChange(text, newExcludeSpaces);
  };


  return (
    <div className="user-input-container">
      <textarea
        className="user-input"
        value={text}
        onChange={handleChange}
        placeholder="Paste your text here..."
        spellCheck="false"
      ></textarea>

      <div className="controls">
        <div className="options">
          <label className="checkbox-wrapper">
            <input
              type="checkbox"
              checked={excludeSpaces}
              onChange={handleExcludeSpacesToggle}
            />
            <span className="checkbox-custom"></span>
            Exclude Spaces
          </label>

          <div className="limit-option-group">
            <label className="checkbox-wrapper">
              <input
                type="checkbox"
                checked={isLimitEnabled}
                onChange={() => {
                  const nextState = !isLimitEnabled;
                  setIsLimitEnabled(nextState);
                  if (nextState) setCharacterLimit(1000);
                  else setCharacterLimit(null);
                }}
              />
              <span className="checkbox-custom"></span>
              Set Character Limit
            </label>

            {isLimitEnabled && (
              <div className="limit-input-wrapper">
                <input
                  type="number"
                  className="character-limit-input"
                  value={characterLimit || ''}
                  onChange={(e) => setCharacterLimit(Number(e.target.value))}
                  min="1"
                />
                <span className="limit-label">chars</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {isLimitEnabled && characterLimit && text.length >= characterLimit && (
        <p className="warning-text">You've reached the character limit!</p>
      )}
    </div>
  );
}

export default UserInput;
