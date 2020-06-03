import React from "react";
import Modal from "react-modal"; // npm i react-modal || npmjs.com/package/react-modal

const OurModal = (props) => (
  <Modal isOpen={props.isModelOpen} contentLabel="Selected Option">
    <h1>this is Modal</h1>
    <button onClick={props.switchModal}>Close Modal</button>
  </Modal>
);
export default OurModal;
