import { useState } from "react";
import classes from "./Greeting.module.css";

interface iGreeting {
  name: string;
  greetingMsg: string;
  isLoggedIn: boolean;
}

const Greeting = ({ name, isLoggedIn }: iGreeting) => {
  const [greetingMsg, setGreetingMsg] = useState<string>("Parn");

  const handleClick = () => {
    setGreetingMsg("Hello");
  };
  return (
    <>
      <div className={classes.card}>
        <h3> {greetingMsg} </h3>
        <p> {isLoggedIn ? name : "Unknow"} </p>
      </div>
      <button onClick={handleClick}>Change greeting message</button>
    </>
  );
};

export default Greeting;
