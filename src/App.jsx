import { Suspense } from "react";
import Scene from "./components/Scene/Scene";

function App() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          background:
            "linear-gradient(180deg, rgba(255,165,0,1) 0%, rgba(255,69,0,1) 100%)",
        }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </div>
    </>
  );
}

export default App;
