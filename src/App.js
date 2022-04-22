import CreateTweet from "./components/CreateTweet";
import {useState} from "react";
import TweetList from "./components/TweetList";

const  App = () => {
    let [name, setName] = useState("Man Tramol");
    let [message, setMessage] = useState("Hello")

    const sayHelloHandler = () => {
        setName("Florin Pop")
        setMessage("Wyd baby!")
        console.log(name);
    }
  return (
    <div className="App">
        <h1>Hello {name}</h1>
        <CreateTweet />
        <TweetList name={name} message={message} />
        <h1>{name}</h1>
        <button onClick={sayHelloHandler}>Click</button>
    </div>
  );
}

export default App;
