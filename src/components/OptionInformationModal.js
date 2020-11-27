import React from "react";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

export default function OptionInformationModal({
  onHide,
  selectedOption,
  show,
}) {
  return selectedOption ? (
    <Modal
      show={show}
      onHide={onHide}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {selectedOption.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={selectedOption.photo} fluid />
        <h4>{selectedOption.subtype}</h4>
        <h6>Price: ${selectedOption.price}</h6>
        <p style={{ textAlign: "justify" }}>{selectedOption.description}</p>
        <p>
          Hours: {selectedOption.startTime[0]}:
          {selectedOption.startTime[1].toString().padEnd(2, 0)} to{" "}
          {selectedOption.endTime[0]}:
          {selectedOption.endTime[1].toString().padEnd(2, 0)}
        </p>
        <p>
          Days Open:{" "}
          {Object.entries(selectedOption.daysOpen)
            .filter((day) => day[1])
            .map((day) => day[0])
            .join(", ")}
        </p>
      </Modal.Body>
    </Modal>
  ) : (
    <></>
  );
}
