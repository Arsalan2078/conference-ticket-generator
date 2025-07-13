import classes from "./App.module.scss";
import Icon from "./components/Icon";
import Logo from "./components/Logo";

export default function App() {
  return (
    <div className={`${classes.app} text-preset-4`}>
      <Logo />

      <p>The quick brown fox jumps over the lazy dog.</p>

      <Icon icon="github" />
    </div>
  );
}
