import React, { Component } from "react";
import { Button } from "react-bootstrap";
import styles from "./postRatingLists.module.css";

class PostsRatingLists extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    const array = data && data[0]?.comments.map((el) => el.rating);

    const ratings =
      array &&
      array?.reduce(function (sum, current) {
        return sum + current;
      }) / array.length;

    return (
      <div className={styles.ratingLists}>
        <Button
          className={styles.plus}
          onClick={() => this.props.handleData()}
          variant="outline-success"
        >
          +
        </Button>
        <Button
        className={styles.minus}
        variant="outline-warning"
        >-</Button>
        <div>
          {data?.map((el) => {
            return (
              <div className={styles.postRating}>
                <div>{el.postName}</div>
                <div>
                  {el.postText}
                  {ratings}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PostsRatingLists;
