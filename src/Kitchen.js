import React from "react";
import Oven from "./Oven";
import Sink from "./Sink";
function Kitchen(props) {
  return (
    <div id="kitchen">
      <Oven />
      <Sink />
      <span>Kitchen</span>
    </div>
  );
}
export default Kitchen;
