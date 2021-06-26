import React, { Component, createRef } from "react";
import idGenerator from "../../helpersFunction/idGenerator";
import { Modal, FormControl, Button } from "react-bootstrap";
import styles from "./newCommetModal.module.css";

class NewComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      comment: "",
    };
    this.formControlRef = createRef();
  }

  componentDidMount() {
    this.formControlRef.current.focus();
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = () => {
    const newRating = this.state.rating.trim();
    const lastComment = this.state.comment.trim();

    if (!newRating && !lastComment) {
      return;
    }

    const newComment = {
      id: idGenerator(),
      rating: +newRating,
      text: lastComment,
    };
    this.props.addComment(newComment);
  };

  render() {
    const { onClose } = this.props;
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
              onChange={this.handleChange}
              onKeyPress={this.handleKeyDown}
              className="mb-3"
              ref={this.formControlRef}
            />
            <FormControl
              placeholder="Write a comment"
              name="comment"
              as="textarea"
              rows={5}
              onChange={this.handleChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleSubmit} variant="success">
              Add
            </Button>
            <Button onClick={onClose} variant="secondary">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default NewComment;
