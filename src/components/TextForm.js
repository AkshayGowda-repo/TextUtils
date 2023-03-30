import React, {useState} from 'react'

export default function TextForm(props) {
  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value)
  }


  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleCopy = ()=>{
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();    //to remove copy highlights
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText)
  }

    const [text, setText] = useState("");
    //alway use setText() function to update "text" variable
    
  return (<>
        <h1>{props.heading}</h1>
        <div className="mb-3" style={{color:props.mode == 'dark'?'white':'black'}}>
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8" style={{backgroundColor : props.mode == 'dark'?'grey':'white',color:props.mode == 'dark'?'white':'grey'}}></textarea>
        </div>
        <button disabled={text.length == 0} className="btn btn-danger mx-2" onClick={handleLoClick} >Convert to Uppercase</button>
        <button disabled={text.length == 0} className="btn btn-danger mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
        <button disabled={text.length == 0} className="btn btn-danger mx-2" onClick={handleClearClick} >Clear</button>
        <button disabled={text.length == 0} className="btn btn-danger mx-2" onClick={handleCopy} >Copy Text</button>

        <div className="container my-3" style={{color:props.mode == 'dark'?'white':'black'}}>
          <h1>Your text summary</h1>
          <p>{text.split(/\s+/).filter((element)=>{return element.length != 0}).length} words and {text.length} characters</p>
          <p>{0.008* text.split(" ").filter((element)=>{return element.length != 0}).length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text.length>0? text: <b>"Enter something in the textbox to preview It."</b>}</p>
        </div>
  </>
  )
}
