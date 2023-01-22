import React, { useState, useEffect } from "react";


function Header () {

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [flag, setFlag] = useState(false);

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title){
            setText("Enter title");
            setFlag(true);
            setTitle("");
        }
        else {
            setText(title);
            setTitle("");
            setFlag(true);
        }
    }

    const handleToogle = () => {
        setFlag(false);
        setText("");
    }

    useEffect(() => {
        const data = JSON.parse(window.localStorage.getItem('title'));
        if(data){
            setText(data);
            setFlag(true)
        } else {
            setText("Enter title");
            setFlag(true)
        }
      }, []);

    useEffect(() => {
        if(text.length !== 0){
            window.localStorage.setItem('title', JSON.stringify(text));
        }
      }, [text]);

    

    return (
        <div className="header">
            <form onSubmit={handleSubmit}>
                {flag ? null : 
                <div className="form">
                    <input className="input" maxLength="15" placeholder="Type your title" value={title} onChange={handleChange} />
                    <button type="submit" className="boton">Enter</button>
                </div>}
                <h1 className="notes_title" onClick={handleToogle} style={{cursor: "pointer"}}>{text}</h1>
            </form>
        </div>
    )
}

export default Header;