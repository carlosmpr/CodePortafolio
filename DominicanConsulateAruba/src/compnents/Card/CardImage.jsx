import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import SimpleGrow from "./Grow";

export default function CardImage({ img_ }) {
  return (
      <SimpleGrow>
    <Card style={{ width: "100%", marginRight:"3px" }}>
      <CardMedia
        component="img"
        alt={img_}
        
        image={img_}
        title={img_}
      />
    </Card>
    </SimpleGrow>
  );
}

