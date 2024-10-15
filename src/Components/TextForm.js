import React, { useState } from 'react'
import Modal from './Modal';


export default function TextForm(props) {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('')
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Text has been converted to UPPERCASE', 'success')
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Text has been converted to lowercase', 'success')

  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const handleEmail = () => {
    const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    let emails = text.match(emailPattern)
    if (emails){
      emails = emails.join(", ")
      setEmail(emails)
    }
    else{
      setEmail('')
      props.showAlert("No emails found!", "danger")
    }
  }

  const handleCopy = ()=>{
    navigator.clipboard.writeText(text)
    document.getSelection().removeAllRanges();
    props.showAlert('Text has been copied to clipboard', 'success')

  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Extra spaces have been removed', 'success')

  }

  return (
    <>
      <div className='container' style={{color: props.mode === 'dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" aria-label="With textarea" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'lightgrey':'white'}} id='myBox' rows="8"></textarea>
          <button className={`btn btn-${props.btnColor} my-2 mx-1`} disabled={text.length === 0} onClick={handleUpClick}>Convert to UPPERCASE</button>
          <button className={`btn btn-${props.btnColor} my-2 mx-1`}disabled={text.length === 0} onClick={handleLoClick}>Convert to lowercase</button>
          <button className={`btn btn-${props.btnColor} my-2 mx-1`} disabled={text.length === 0} onClick={handleEmail}>Check for Email</button>
          <button className={`btn btn-${props.btnColor} my-2 mx-1`} disabled={text.length === 0} onClick={handleCopy}>Copy Text</button>
          <button className={`btn btn-${props.btnColor} my-2 mx-1`} disabled={text.length === 0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          <button type="button" class={`btn btn-${props.btnColor}`} disabled={text.length === 0} data-bs-toggle="modal" data-bs-target="#exampleModal">Translate</button>
          
        </div>
      </div>
      <Modal text={text} />
      <div className='container' style={{color: props.mode === 'dark'?'white':'black'}} >
        <h1>Your text Summary</h1>
        <p>Characters - {text.length}</p>
        <p>Words - {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length}</p>
        <p>Time to Read - {(0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length).toFixed(2)} minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
        <h2>Emails</h2>
        <p>{email.length>0?email:"Nothing to preview!"}</p>
      </div>
    </>
  )
}
