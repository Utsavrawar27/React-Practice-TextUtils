import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
    }

    return (
        <>
        <div className="container" style={{color: props.mode==='dark' ? 'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? '#13466e':'white', color: props.mode==='dark' ? 'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
        </div>

        <div className="container my-3" style={{color: props.mode==='dark' ? 'white':'black'}}>
            <h2> Your text summary</h2>
            <p>{text.split(" ").filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text:"Enter something to Preview"}</p>
        </div>
        </>
    )
}
