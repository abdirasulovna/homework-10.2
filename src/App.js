import { useEffect } from "react";
import { useRef } from "react";
import "./App.css";

function App() {
  const divRef = useRef();
  const color = ["red", "green"];
  useEffect(() => {
    const interval = setInterval(() => {
      divRef.current.style.background =
        color[Math.round(Math.random() * color.length)];
    }, 500);
    return () => clearInterval(interval);
  }, [color]);

  return <div className="block" ref={divRef}></div>;
}

export default App;
