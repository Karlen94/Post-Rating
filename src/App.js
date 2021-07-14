import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import PostList from "./Components/PostList/PostList";
import "bootstrap/dist/css/bootstrap.min.css";
import { postObj } from "./postData/postData";
import { Container, Row } from "react-bootstrap";
import { addData } from "./store/action";

function App({ addData }) {



  useEffect(() => {
    addData(postObj);
  }, []);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="listContainer">
            <PostList />
          </div>
        </Row>
      </Container>
    </div>
  );
}

const mapDispatchToProps = {
  addData,
};

export default connect(null, mapDispatchToProps)(App);
