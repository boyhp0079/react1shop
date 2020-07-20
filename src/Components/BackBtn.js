import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

export default function BackBtn() {
  let history = useHistory();
  return (
    <button className="back-btn" onClick={() => history.goBack()}>
      <FontAwesomeIcon icon="arrow-left" size="2x"/> <span className="back-btn-text">Back to shopping</span>
    </button>
  );
}
