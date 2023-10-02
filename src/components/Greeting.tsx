import classes from "./Greeting.module.css";

interface iGreeting {
  name: string;
  greetingMsg: string;
  isLoggedIn: boolean;
}

const Greeting = ({ name, greetingMsg, isLoggedIn }: iGreeting) => {
  return (
    <div className={classes.card}>
      <h3> {greetingMsg} </h3>
      <p> {isLoggedIn ? name : "Unknow"} </p>
    </div>
  );
};

export default Greeting;
