import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <h1>⟬ Dictionary ⟭</h1>
      <p className="intro">What word would you like to search?</p>
      <Dictionary defaultKeyword="money" />
      <hr />
      <footer>
        {" "}
        <a
          href="https://github.com/huyenspace/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          Open-source
        </a>{" "}
        code by{" "}
        <a
          href="https://github.com/huyenspace/"
          target="_blank"
          rel="noreferrer"
        >
          Huyen Nguyen
        </a>
      </footer>
    </div>
  );
}
