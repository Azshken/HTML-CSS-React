import React from "react";
import memesData from "../memesData.js";

export default function Main() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])
  
  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    console.log(randomNumber);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  console.log(meme);

  function handleChange(event) {
    setMeme((prevText) => ({
      ...prevText,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <main>
      <div class="grid m-14">
        <form class="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Top text"
            class="border-2 rounded py-2 pl-3"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />
          <input
            type="text"
            placeholder="Bottom text"
            class="border-2 rounded py-2 pl-3"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </form>
        <button
          onClick={getMemeImage}
          class="text-white mt-4 border-2 rounded-lg py-2 px-3 bg-gradient-to-r from-navStart to-navEnd"
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div class="flex flex-wrap justify-center">
        <img src={meme.randomImage} class="w-4/5 " />
        <h2 class="self-top absolute text-4xl text-white mt-2 font-extrabold uppercase tracking-wide shadow-inner w-4/5 text-center font-poppins ">
          {meme.topText}
        </h2>
        <h2 class="self-end absolute text-4xl text-white mb-3 font-bold uppercase tracking-wide shadow-inner w-4/5 text-center font-poppins">
          {meme.bottomText}
        </h2>
      </div>
    </main>
  );
}
