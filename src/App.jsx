import './App.css'
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "assets/WebGL.loader.js",
    dataUrl: "assets/WebGL.data.br",
    frameworkUrl: "assets/WebGL.framework.js.br",
    codeUrl: "assets/WebGL.wasm.br",
  });

  return (
    <div style={{display: "flex", justifyContent: 'center', alignItems: 'center', width: "100vw"}}>
      {!isLoaded && (
        <div style={{textAlign: 'center', marginLeft: '550px', fontSize: '20px'}}><p>Loading Application... {Math.round(loadingProgression * 100)}%</p></div>
      )}
      <Unity
        unityProvider={unityProvider}
        style={{ visibility: isLoaded ? "visible" : "hidden", aspectRatio: "9 / 16", height: window.innerHeight, borderLeft: '5px solid #306FA5', borderRight: '5px solid #306FA5' }}
      />
    </div>
  );
}

export default App
