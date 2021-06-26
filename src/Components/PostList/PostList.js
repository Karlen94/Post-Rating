import React, { Component } from "react";
import PostsRatingLists from "../PostsRatingLists/PostsRatingLists";
import Pagination from "../Pagination/Pagination";
import { postObj } from "../../postData/postData";
import { Container, Row, Col } from "react-bootstrap";
import style from "./postList.module.css";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtredData: [],
      lastElementId1: null,
    };
  }

  handleData = () => {
    const lastElement = postObj[postObj.length - 1];
    // const lastElementId = lastElement.id;
    this.setState({
      filtredData: [...this.state.filtredData, lastElement],
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <div className={style.container}>
              <Pagination data={postObj} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <PostsRatingLists
              handleData={this.handleData}
              data={this.state.filtredData}
              id="left"
            />
          </Col>
          <Col>
            <PostsRatingLists
              handleData={this.handleData}
              data={this.state.filtredData}
              id="right"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PostList;
