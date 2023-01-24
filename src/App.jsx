
import React from "react";
import {ResponsiveAppBar} from "./components/navbar"
import {IconButtonSizes} from "./components/bottons"
import {Imagenes, StandardImageList} from "./components/imagen"
function App() {
  return (
    <div>
        <ResponsiveAppBar></ResponsiveAppBar>
        <IconButtonSizes></IconButtonSizes>
        <Imagenes></Imagenes>
    </div>
  );
}

export default App;
