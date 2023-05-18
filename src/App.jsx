import { Suspense } from "react";
import Scene from "./components/Scene/Scene";
import "./App.css";
import Labels from "./components/Model/Labels";

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
