import "./App.css";
import ClipboardExample from "./components/ClipboardExample";
import LocalStorageExample from "./components/LocalStorageExample";

function App() {
  return (
    <>
      <div className="grid gap-10">
        <LocalStorageExample />
        <ClipboardExample />
      </div>
    </>
  );
}

export default App;
