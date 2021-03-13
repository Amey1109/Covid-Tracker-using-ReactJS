import React from "react";
import "./InfoStats.css";
import { Card, CardContent, Typography } from "@material-ui/core";
function InfoStats({ title, cases, total }) {
  return (
    <div>
      <Card className="infoStats">
        <CardContent>
          <Typography className="infoStats__title" color="textSecondary">
            {title}
          </Typography>
          <h2 className="infoStats__cases">{cases}</h2>
          <Typography className="infoStats__total" color="textSecondary">
            {total} total
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoStats;
