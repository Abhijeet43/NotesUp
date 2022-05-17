import React, { useState } from "react";
import { useLabel } from "../../context/";
import "./LabelModal.css";

const LabelModal = ({ setShowLabelModal, showLabelModal }) => {
  const [newLabel, setNewLabel] = useState("");

  const { labelDispatch } = useLabel();

  const addNewLabel = () => {
    labelDispatch({ type: "ADD_LABEL", payload: newLabel });
    setShowLabelModal(false);
    setNewLabel("");
  };

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
          value={newLabel}
          onChange={(e) => setNewLabel(e.target.value)}
          placeholder="Enter Label Name"
          maxLength="10"
        />
        <button onClick={addNewLabel} className="btn btn-primary add-label-btn">
          Create Label
        </button>
      </section>
    </section>
  );
};

export { LabelModal };
