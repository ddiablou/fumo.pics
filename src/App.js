import "./App.css";
import { useEffect } from "react";
import { randomFumo } from "fumo-api";

function App() {
  useEffect(() => {
    randomFumo().then((url) => {
      document.getElementById("randomFumoWrapper").src = url;
    });
  }, []);
  // Rendering time: Fumos may be slow to render because useEffect hook.
  return (
    <>
      <img
        alt="RandomFumo"
        width={"full"}
        height={"full"}
        id="randomFumoWrapper"
        src={undefined}
      />
    </>
  );
}

export default App;