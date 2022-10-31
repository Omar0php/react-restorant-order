import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

const BackDrop = (props) => {
  return <div onClick={props.close} className={styles.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
//select overlays plase in index.html
const overlaysRoot = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<BackDrop close={props.onClose} />, overlaysRoot)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlaysRoot
      )}
    </Fragment>
  );
};

export default Modal;
