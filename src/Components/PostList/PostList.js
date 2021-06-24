import React, { Component } from "react";
import PostElements from "../PostElements/PostElements";
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
      pageOfItems: postObj,
    };

    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  handleData = () => {
    const lastElement = postObj[postObj.length - 1];
    // const lastElementId = lastElement.id;
    this.setState({
      filtredData: [...this.state.filtredData, lastElement],
    });
  };

  render() {
    console.log(this.state.exampleItems);
    console.log(postObj);
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <div className={style.container}>
              {postObj.map((el) => {
                return <PostElements key={el.id} obj={el} />;
              })}
              <Pagination onChangePage={this.onChangePage} items={postObj} />
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
