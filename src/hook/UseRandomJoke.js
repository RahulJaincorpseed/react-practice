import React, {useState, useEffect} from "react";

function UseRandomJoke() {
    const [joke, setJoke] = useState("");

    useEffect(() => {
      const fetchJoke = async () =>
        await fetch(
          `https://official-joke-api.appspot.com/jokes/random`
        ).then(res=>res.json())
        .then(data => {setJoke(data)});
        fetchJoke();
    }, [])
    return joke;
  
}

export default UseRandomJoke;
