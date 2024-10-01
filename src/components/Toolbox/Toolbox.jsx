import React from "react";

function Toolbox() {
  const updateBrushSize = (e) => {};
  return (
    <div>
      <div className="">
        <h4>Stroke Color</h4>
        <div className="">
          <div />
        </div>
      </div>
      <div className="">
        <h4>Brush Size</h4>
        <div className="">
          <input
            type="range"
            min={1}
            max={10}
            step={1}
            onChange={updateBrushSize}
          />
        </div>
      </div>
    </div>
  );
}

export default Toolbox;
