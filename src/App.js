import "./App.css";
import { useEffect } from "react";
import { randomFumo } from "fumo-api";

function App() {
  useEffect(() => {
    function fetchFumoFu() {
      randomFumo().then((url) => {
        document.getElementById("randomFumoWrapper").src = url;
      });
    }
    fetchFumoFu()
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