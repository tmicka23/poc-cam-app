import React from "react";
import "./App.css";
import "@ungap/custom-elements";
import "@grafikart/drop-files-element";

const App = () => {
  return (
    <div className="app">
      <input
        type="file"
        multiple
        name="files[]"
        label="Glissez/déposez vos images ici"
        help="Les images seront lors de la soummission du formulaire"
        is="drop-files"
      />

      <input type="file" accept="images/*" capture="user" multiple></input>
    </div>
  );
};

export default App;
