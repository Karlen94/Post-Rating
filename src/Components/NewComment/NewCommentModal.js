import React, { useState, useEffect, createRef } from "react";
import idGenerator from "../../helpersFunction/idGenerator";
import { connect } from "react-redux";
import { addComment } from "../../store/action";
import { Modal, FormControl, Button } from "react-bootstrap";
import styles from "./newCommetModal.module.css";

const NewComment = (props) => {
  const [state, setState] = useState({
    rating: 0,
    comment: "",
  });

  const formControlRef = createRef();

  useEffect(() => {
    formControlRef.current.focus();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const newRating = state.rating.trim();
    const lastComment = state.comment.trim();

    if (!newRating && !lastComment) {
      return;
    }

    const newComment = {
      id: idGenerator(),
      rating: +newRating,
      text: lastComment,
    };
    props.addComment(newComment);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const { onClose } = props;
  return (
    <>
      <Modal
        show={true}
        onHide={onClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className={styles._modalTitle}
          >
            Add New Comment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            placeholder="Rating"
            name="rating"
            onChange={handleChange}
            onKeyPress={handleKeyDown}
            className="mb-3"
            ref={formControlRef}
          />
          <FormControl
            placeholder="Write a comment"
            name="comment"
            as="textarea"
            rows={5}
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit} variant="success">
            Add
          </Button>
          <Button onClick={onClose} variant="secondary">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const mapDispatchToProps = {
  addComment,
};

export default connect(null, mapDispatchToProps)(NewComment);
