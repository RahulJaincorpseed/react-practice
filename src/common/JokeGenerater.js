import UseRandomJoke from "../hook/UseRandomJoke"

const JokeGenerater = () => {
    const joke = UseRandomJoke();   

    console.log(joke);
    
  return (
    <div>
      <h1>Random Joke</h1>
      <button>Generate joke</button>
    </div>
  )
}

export default JokeGenerater
