import "./index.css";
import "./tablet.css";
import "./mobile.css";
import { CloseRounded } from "@material-ui/icons";
import { useEffect, useState } from "react";

const Modal = ({ children, superClass, opened, onClose }) => {
  return (
    opened && (
      <div className={`t-modal-wrapper`}>
        <div className={`t-modal ${superClass}`}>
          <span className="t-modal-close-wrap">
            <CloseRounded className="t-modal-close" onClick={onClose} />
          </span>
          <div className="t-modal-body">{children}</div>
        </div>
      </div>
    )
  );
};

export default Modal;
