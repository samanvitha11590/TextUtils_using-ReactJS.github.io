import React,{useState} from 'react'
export default function TextForm(props) 
{
  
  const handleUpClick=()=>{
    // console.log("Uppercase was clicked" + text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  }

  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  }
 
  const handleOnChange=(event)=>{
    // console.log("On change");
    setText(event.target.value);
  }

  const handleClearClick=()=>{
    let newText='';
    setText(newText);
    props.showAlert("Text Cleared", "success");
  }

  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  }

  const handleExtraSpaces=()=>{
    let newText=text.split(/[  ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces are removed", "success");
  }

  const [text,setText]=useState('Enter text here');
  //text="new text";   //wrong way to change the state
  //set text("new text"); //correct way to change the state
  return (
    <>
  <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1 className='mb-4'>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  </div>
  <div className="container my-3 " style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read </p>
      <h4>Preview</h4>
      <p>{text.length>0?text:"Nothing to preview"}</p>
  </div>
  </>
  )
}
