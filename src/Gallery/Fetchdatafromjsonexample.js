import React from "react";
import Sample from "./Sample.json";
function Multipleoptions() {
  return (
    <div>
      
      {Sample.map((item) => (
        <li>{item.name}</li>
  
      ))}
      
    </div>
  );
}

export default Multipleoptions;
