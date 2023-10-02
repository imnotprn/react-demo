import classes from "./Greeting.module.css";

interface iGreeting {
  name: string;
  greetingMsg: string;
}

const Greeting = ({ name, greetingMsg }: iGreeting) => {
  return (
    <div className={classes.card}>
      <h3> {greetingMsg} </h3>
      <p> {name} </p>
    </div>
  );
};

export default Greeting;
