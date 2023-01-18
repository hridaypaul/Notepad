import React,{useState} from 'react'

export default function TextForm(props) {
  
 const handleUpClick =()=>{ 
   let newText = text.toUpperCase();
  setText(newText)
  props.showAlert("Converted to uppercase", "success")
 }
 const handleLowClick =()=>{ 
   let newText = text.toLowerCase();
  setText(newText)
  props.showAlert("Converted to lowercase", "success")

 }
 const handleClearText = ()=>{
    let newText = '';
    setText(newText)
  props.showAlert("Clear text done", "success")

 }
 const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '))
  props.showAlert("Extra spaces removed", "success")

 }
  
 const handleOnChange =(event)=>{ 
  setText(event.target.value)
 }

 const [text,setText] = useState('');
 return (
  <>
     <div className='container my-3'style={{backgroundColor:props.mode==='dark'?'#0e0225':'white'}}>
      <h2 className='heading'> {props.heading}</h2>
       <div className="mb-3">
        <textarea className="form-control" value={text} id="Mybox" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#0e0225':'white', color:props.mode==='dark'?'white':'black'}} rows="8"></textarea>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}> UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}> LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearText}> Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces </button>
       </div>
   </div>
   <div className='container'>
     <h3>Your Text Summery</h3>
     <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charecters</p>

   </div>
  </>
 )
}
