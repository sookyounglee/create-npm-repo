import React from "react";
import { Badge, Card } from "antd";

const BadgeComp = (props) => {
  return (
    <Badge.Ribbon text="Hippies" color="purple">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass. <b>[ {props.value} ]</b>
      </Card>
    </Badge.Ribbon>
  );
};

export default BadgeComp;
