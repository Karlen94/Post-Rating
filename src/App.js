import "./App.css";
import PostList from "./Components/PostList/PostList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";

function App() {
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

export default App;
