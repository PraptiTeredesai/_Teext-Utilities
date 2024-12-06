import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);

  const handleUpClick = () => {
    if (!text.trim()) {
      props.showAlert("Please enter some text first", "warning");
      return;
    }
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    if (!text.trim()) {
      props.showAlert("Please enter some text first", "warning");
      return;
    }
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleBoldClick = () => {
    setBold(!bold);
    props.showAlert("Converted to Bold Text, Check Preview", "success");
  };

  const handleItalicClick = () => {
    setItalic(!italic);
    props.showAlert("Converted to Italic Text, Check Preview", "success");
  };

  const handleUnderlineClick = () => {
    setUnderline(!underline);
    props.showAlert("Text is Underlined, Check Preview", "success");
  };

  const handleClearClick = () => {
    setText('');
    props.showAlert("Text cleared", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard", "success");
  };

  const handleExtraSpaces = () => {
    setText(text.split(/[ ]+/).join(' '));
    props.showAlert("Extra spaces removed", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const wordCount = text.trim() ? text.split(/\s+/).filter((word) => word.length > 0).length : 0;

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}
      >
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
            color: props.mode === 'dark' ? 'white' : '#042743',
          }}
          id="myBox"
          rows="8"
        ></textarea>

        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleBoldClick}>
          Bold Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleItalicClick}>
          Italic Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUnderlineClick}>
          Underline Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}
      >
        <h2>Your text summary</h2>
        <p>{wordCount} words and {text.length} characters</p>
        <p>{(wordCount * 0.008).toFixed(2)} Minutes read</p>
        <h2>Preview</h2>
        <p
          style={{
            fontWeight: bold ? 'bold' : 'normal',
            fontStyle: italic ? 'italic' : 'normal',
            textDecoration: underline ? 'underline' : 'none',
          }}
        >
          {text.length > 0 ? text : 'Enter something in the textbox above to preview it here'}
        </p>
      </div>
    </>
  );
}
