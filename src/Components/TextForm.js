import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");

    const HandlerOnChange = (event) => {
       //console.log('onChange function called');
       setText(event.target.value);
    };
    const HandlerOnUpClick = () => {
        //console.log('uppercase clicked');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase', 'success');
    };
    const HandlerOnDownClick = () => {
      //console.log('lowercase clicked');
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert('Converted to LowerCase', 'success');
  };
  const HandlerOnClrClick = () => {
    //console.log('lowercase clicked');
    let newText = "";
    setText(newText);
    props.showAlert('Text Area Cleared', 'success');
  };
  return (
    <>
    <div className="container" style={{color:props.mode === 'light'? 'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={HandlerOnChange} style={{backgroundColor:props.mode === 'dark' ? 'grey':'white', color:props.mode === 'light'? 'black':'white'}}  id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={HandlerOnUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={HandlerOnDownClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={HandlerOnClrClick}>Clear</button>
    </div>
    <div className="conatiner my-3" style={{color:props.mode === 'light'? 'black':'white'}}>
    <h3>Your text summery</h3>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} minutes to read</p>
    <h3>Preview</h3>
    <p>{text.length>0? text: 'Enter the text in above textarea to preview here'}</p>
    </div>
    </>
  )
}
