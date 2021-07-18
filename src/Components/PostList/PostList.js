import React, {  useState } from "react";
import PostsRatingLists from "../PostsRatingLists/PostsRatingLists";
import Pagination from "../Pagination/Pagination";
import NewComment from "../NewComment/NewCommentModal";
import { Container, Row, Col } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import { toggleNewCommentModal } from "../../store/action";
import style from "./postList.module.css";

const PostList = ({  toggleNewCommentModal, openCommentModal }) => {
  const [state, setState] = useState({
    leftData: [],
    rightData: [],
  });

  const filtredData =useSelector((state)=>state.filtredData)

 

 

  // const addComment = (element) => {
  //   filtredData.map((el) => {
  //     if (el.id === elementId) {
  //       return el.comments.push(element);
  //     }
  //     return el;
  //   });
  //   setState({
  //     ...state,
  //     filtredData: filtredData,
  //     openCommentModal: false,
  //   });
  // };

  // const toggleNewCommentModal = (id) => {
  //   setState({
  //     ...state,
  //     elementId: id,
  //     openCommentModal: !state.openCommentModal,
  //   });
  // };

  const removeData = (id) => {
    const { rightData, leftData } = state;
    if (id === "right" && rightData.length !== 0) {
      filtredData.push(rightData.pop());
      setState({
        ...state,
        filtredData: [...filtredData],
      });
    } else {
      if (id === "left" && leftData.length !== 0) {
        filtredData.push(leftData.pop());

        setState({
          ...state,
          filtredData: [...filtredData],
        });
      }
    }
  };

  const handleData = (id) => {
    const { rightData, leftData } = state;
    const lastElement = filtredData[filtredData.length - 1];
    if (filtredData === 0) {
      return;
    }
    if (id === "right" && filtredData.length !== 0) {
      rightData.push(lastElement);
      filtredData.pop();
      setState({
        ...state,
        filtredData: [...filtredData],
        rightData: [...rightData],
      });
    } else {
      if (id === "left" && filtredData.length !== 0) {
        leftData.push(lastElement);
        filtredData.pop();
        setState({
          ...state,
          filtredData: [...filtredData],
          leftData: [...leftData],
        });
      }
    }
  };
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12}>
            <div className={style.container}>
              <Pagination
                toggleNewCommentModal={toggleNewCommentModal}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <PostsRatingLists
              handleData={handleData}
              deleteData={removeData}
              data={state.leftData}
              id="left"
            />
          </Col>
          <Col>
            <PostsRatingLists
              handleData={handleData}
              deleteData={removeData}
              data={state.rightData}
              id="right"
            />
          </Col>
        </Row>
      </Container>
      {openCommentModal && <NewComment onClose={toggleNewCommentModal} />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    openCommentModal: state.openCommentModal,
  };
};

const mapDispatchToProps = {
  toggleNewCommentModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
