import React, { Component } from "react";
import PostsRatingLists from "../PostsRatingLists/PostsRatingLists";
import Pagination from "../Pagination/Pagination";
import NewComment from "../NewComment/NewCommentModal";
import { postObj } from "../../postData/postData";
import { Container, Row, Col } from "react-bootstrap";
import style from "./postList.module.css";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtredData: postObj,
      leftData: [],
      rightData: [],
      openCommentModal: false,
      elementId: "",
    };
  }

  addComment = (element) => {
    const { filtredData, elementId } = this.state;
    filtredData.map((el) => {
      if (el.id === elementId) {
        return el.comments.push(element);
      }
      return el;
    });
    this.setState({
      filtredData: filtredData,
      openCommentModal: false,
    });
  };

  toggleNewCommentModal = (id) => {
    this.setState({
      elementId: id,
      openCommentModal: !this.state.openCommentModal,
    });
  };

  removeData = (id) => {
    const { rightData, filtredData, leftData } = this.state;
    if (id === "right" && rightData.length !== 0) {
      filtredData.push(rightData.pop());
      this.setState({
        filtredData: [...filtredData],
      });
    } else {
      if (id === "left" && leftData.length !== 0) {
        filtredData.push(leftData.pop());
        this.setState({
          filtredData: [...filtredData],
        });
      }
    }
  };

  handleData = (id) => {
    const { filtredData, rightData, leftData } = this.state;
    const lastElement = filtredData[filtredData.length - 1];
    if (filtredData === 0) {
      return;
    }
    if (id === "right" && filtredData.length !== 0) {
      rightData.push(lastElement);
      filtredData.pop();
      this.setState({
        filtredData: [...filtredData],
        rightData: [...rightData],
      });
    } else {
      if (id === "left" && filtredData.length !== 0) {
        leftData.push(lastElement);
        filtredData.pop();
        this.setState({
          filtredData: [...filtredData],
          leftData: [...leftData],
        });
      }
    }
  };

  render() {
    const { filtredData, openCommentModal } = this.state;
    return (
      <div>
        <Container>
          <Row>
            <Col xs={12}>
              <div className={style.container}>
                <Pagination
                  data={filtredData}
                  toggleNewCommentModal={this.toggleNewCommentModal}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <PostsRatingLists
                handleData={this.handleData}
                deleteData={this.removeData}
                data={this.state.leftData}
                id="left"
              />
            </Col>
            <Col>
              <PostsRatingLists
                handleData={this.handleData}
                deleteData={this.removeData}
                data={this.state.rightData}
                id="right"
              />
            </Col>
          </Row>
        </Container>
        {openCommentModal && (
          <NewComment
            addComment={this.addComment}
            onClose={this.toggleNewCommentModal}
          />
        )}
      </div>
    );
  }
}

export default PostList;
