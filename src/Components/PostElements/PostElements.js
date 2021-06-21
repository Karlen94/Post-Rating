import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import style from "./postElements.module.css";

class PostElements extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { postName, postText, comments } = this.props.obj.post1;
    console.log(this.props);
    return (
      <Container>
        <Row>
          <div className={style.taskContainer}>
            <h1>{postName}</h1>
            <p>{postText}</p>
            {comments.map((el) => {
              return (
                <span>
                  {el.text}
                  <FontAwesomeIcon icon={faStar} size="lg" />
                  <br />
                </span>
              );
            })}
          </div>
        </Row>
      </Container>
    );
  }
}

export default PostElements;
