import React from "react";
import { connect } from "react-redux";
import { toggleNewCommentModal } from "../../store/action";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Avatar } from "@material-ui/core";
import RatingStar from "../RatingStar/RatingStar";
import style from "./postElements.module.css";

const PostElements = (props) => {
  const { toggleNewCommentModal } = props;
  let { postName, postText, comments, id } = props.obj;

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <div className={style.taskContainer}>
            <div>
              <h1>{postName}</h1>
            </div>
            <div className={style.ratingText}>
              <Avatar />
              <p>{postText}</p>
            </div>
            {comments.map((el) => {
              return (
                <div key={el.id} className={style.commentsDiv}>
                  <Avatar /> {el.text}
                  <RatingStar rating={el.rating} />
                </div>
              );
            })}
            <Button
              xs={3}
              className={style.addNewCommentButton}
              variant="success"
              onClick={() => toggleNewCommentModal(id)}
            >
              Leave a comment
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     filtredData: state.filtredData,
//   };
// };

const mapDispatchToProps = {
  toggleNewCommentModal,
};

export default connect(null, mapDispatchToProps)(PostElements);
