import React from "react";
import LivingRoom from "./LivingRoom";
import Kitchen from "./Kitchen";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

function FloorPlan(props) {
  return (
    <div id="FloorPlan">
      <LivingRoom />
      <Kitchen />
      <Bedroom bedNum={1} />
      <Bedroom bedNum={2} />
      <Bedroom bedNum={3} />
      <Bath size="Half" />
      <Bath size="Full" />
    </div>
  );
}
export default FloorPlan;