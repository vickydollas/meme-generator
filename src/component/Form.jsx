import React, { useState } from "react";
import "./Form.css"
import memeImages from "./Images";

function Form() {
    // const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/30b1gx.jpg")

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })
    const [allMemeImage,] = useState(memeImages)

    function getMemeImage () {
        const memesArray = allMemeImage.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
    function handleChange (event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    return (
        <div className="bodycont">
            <div className="form">
                    <input 
                    type="text"
                    placeholder="Top Text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                    />
                    <input 
                    type="text"
                    placeholder="buttom Text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    />
                    <button 
                    className="form--button"
                    onClick={getMemeImage}>Get a new meme image  🖼</button>
            </div>
            <div className="form-2">
                <img 
                    src={meme.randomImage}
                    alt="error"
                    className="meme--sizing"
                />
                <h1 className="meme--text top">{meme.topText}</h1>
                <h1 className="meme--text bottom">{meme.bottomText}</h1>
            </div>
        </div>
    )
}

export default Form;