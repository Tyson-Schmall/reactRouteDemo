import React from "react";

function CompTwo(props) {
  
  return (
    <div>
      <h1>COMP 2</h1>
      {props.match.params.id}
    </div>
  );
}

export default CompTwo;
