import React from "react";
import memesData from "../memesdata.js"
import memesdata from "../memesdata.js";
export default function Meme()
{
    function getMemeImage()
    {
        const memesArray = memesdata.data.memes
        const randomNumber = Math.floor(Math.random()* memesArray.length)
        const {url} = memesArray[randomNumber]
        console.log(url);
    }
    return(
       
            <div className = "form">
                <input 
                    placeholder = "text"
                    className = "form--input"
                    type="text"
                />
                <input 
                    placeholder = "text"
                    className = "form--input"
                    type="text"
                />
                <button 
                    className="form--button"
                    onClick = {getMemeImage}
                >
                    Get a new Meme Image
                </button>
            </div>
       
    );
}