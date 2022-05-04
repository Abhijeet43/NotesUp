import React from "react";
import "./LabelModal.css";

const LabelModal = ({ setShowLabelModal, showLabelModal }) => {
  return (
    <section
      className={`label-backdrop ${showLabelModal ? "modal-active" : ""}`}
    >
      <section className="add-label-modal">
        <div className="modal-header">
          <h3 className="modal-title">Add New Label</h3>
          <i
            className="fa-solid fa-xmark close-btn"
            onClick={() => setShowLabelModal(false)}
          ></i>
        </div>
        <input
          className="new-label-text"
          type="text"
          placeholder="Enter Label Name"
        />
        <button className="btn btn-primary add-label-btn">Create Label</button>
      </section>
    </section>
  );
};

export { LabelModal };
