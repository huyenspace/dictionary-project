import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <h1>⟬ Dictionary ⟭</h1>
      <p className="intro">What word would you like to search?</p>
      <Dictionary />
    </div>
  );
}
