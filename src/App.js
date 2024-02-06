import './App.css';
import GifDisplay from "./components/GifDisplay"
import { useState } from 'react';

function App() {



  //apikey
  const apiKey = "TqMbZovKUOpLCPQViyGp8D9GPG7TrH66"
  //state
  const [gif, setGif] = useState(null)

  //fuction to get a gif from the api
  const handleClick = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    const response = await fetch (url)
    const data = await response.json()
    
    setGif(data)
  }


  return (
    <div className="App">
      <h1>Giphy</h1>
    <button onClick={handleClick}>Make API Call Again</button>
    <GifDisplay gif={gif}/>
    </div>
  );
}

export default App;
