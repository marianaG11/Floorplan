import React from "react";

function Bath(props) {
  return (
    <div className="bath" id={`bath-${props.size}`}>
      {props.size} Bathroom
    </div>
  );
}
export default Bath;
