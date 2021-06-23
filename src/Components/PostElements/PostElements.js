import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Avatar } from "@material-ui/core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
import RatingStar from "../RatingStar/RatingStar";
import style from "./postElements.module.css";

class PostElements extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { postName, postText, comments } = this.props.obj;
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <div className={style.taskContainer}>
              <div>
                <h1>{postName}</h1>
              </div>
              <div className={style.ratingText}>
                <p>
                  <Avatar />
                  {postText}
                </p>
              </div>
              {comments.map((el) => {
                return (
                  <div className={style.commentsDiv}>
                    <Avatar /> {el.text}
                    <div className={style.ratingDiv}>
                      <RatingStar rating={el.rating} />
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PostElements;
