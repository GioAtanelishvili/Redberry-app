import React from "react";
import RIGHT_PANEL_DATA from "../additional-data/right-panel-data";

export default function RightPanel({ page }) {
  return (
    <React.Fragment>
      <h1 className="header">{RIGHT_PANEL_DATA[page].header}</h1>
      <p className="paragraph">{RIGHT_PANEL_DATA[page].paragraph}</p>
    </React.Fragment>
  );
}
