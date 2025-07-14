import classes from "./App.module.scss";
import Icon from "./components/Icon";
import Logo from "./components/Logo";
import Ticket from "./components/Ticket";

export default function App() {
  return (
    <div className={`${classes.app} text-preset-4`}>
      <Logo />

      <p>The quick brown fox jumps over the lazy dog.</p>

      <Ticket />
      <button>Generate My Ticket</button>

      <input type="text" name="" id="" value="Benedict Camper" />
      <input type="email" name="" id="" placeholder="example@email.com" />
      <input type="text" name="" id="" placeholder="@yourusername" />

      <Icon icon="github" />
    </div>
  );
}
