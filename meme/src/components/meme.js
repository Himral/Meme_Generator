import React from "react";
export default function Meme()
{
    const [memeImage, setMemeImage] = React.useState("https://cdn.britannica.com/19/213119-050-C81C786D/Grumpy-Cat-2015-memes.jpg")
    

    const [allMemes , setAllMemes] = React.useState("");

    React.useEffect(() =>
    {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    })

    function getMemeImage()
    {
        
        const memesArray = allMemes
        const randomNumber = Math.floor(Math.random()* memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

    function handleChange(event)
    {
        const {name , value,type} = event.target
        setMeme(prevFormData =>{
            return{
                ...prevFormData,
                [name] : value
            }
        })
    }

    const [meme,setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage : "https://cdn.britannica.com/19/213119-050-C81C786D/Grumpy-Cat-2015-memes.jpg" 
    })

    
    return(
       <div className="meme-form">

       
            <div className = "form">
                <input 
                    placeholder = "Enter Top text"
                    className = "form--input"
                    type="text"
                    name = "topText"
                    value = {meme.topText}
                    onChange={handleChange}
                />
                <input 
                    placeholder = "Enter Bottom text"
                    className = "form--input"
                    type="text"
                    name = "bottomText"
                    value = {meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick = {getMemeImage}
                >
                    Get a new Meme Image
                </button>
                
            </div>
            <div className="meme">
            <img className='memes--image' src = {memeImage}/>
            <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            </div>
       
    );
}