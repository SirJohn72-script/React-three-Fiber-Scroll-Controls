import { Suspense } from "react";
import "./App.css";
import Labels from "./components/Labels";
import Scene from "./components/Scene";

function App() {
  return (
    <>
      <div className='scene_container'>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </div>
      <Labels />
    </>
  );
}

export default App;
