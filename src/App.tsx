import classes from "./App.module.scss";

export default function App() {
  return (
    <div className={`${classes.app} text-preset-4`}>
      The quick brown fox jumps over the lazy dog.
    </div>
  );
}
