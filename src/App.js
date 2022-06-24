import "./App.css";
import { useEffect } from "react";
import { randomFumo } from "fumo-api";
function App() {
  useEffect(() => {
    async function fetchFumo() {
      randomFumo().then((url) => {
        document.getElementById("randomFumoWrapper").src = url
      });
    }
    fetchFumo();
  }, []);
  // Rendering time: Fumos may be slow to render because useEffect hook.
  return (
    <>
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          position: "relative",
        }}
      >
        <img alt="RandomFumo" id="randomFumoWrapper" src={undefined} />
      </div>
    </>
  );
}