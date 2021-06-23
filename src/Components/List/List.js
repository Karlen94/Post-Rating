import React, { Component } from "react";
import PostElements from "../PostElements/PostElements";
import PostsRatingLists from "../PostsRatingLists/PostsRatingLists";
import { postObj } from "../../postData/postData";
import { Container, Row, Col } from "react-bootstrap";
import style from "./list.module.css";

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
              <h1>hello Karlen</h1>
              {postObj.map((el) => {
                return <PostElements key={el.id} obj={el} />;
              })}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <PostsRatingLists
              handleData={this.handleData}
              data={this.state.filtredData}
            />
          </Col>
          <Col>
            <PostsRatingLists />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PostList;
