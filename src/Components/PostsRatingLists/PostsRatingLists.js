import { Star } from "@material-ui/icons";
import React from "react";
import { Button } from "react-bootstrap";
import styles from "./postRatingLists.module.css";

const PostsRatingLists = (props) => {
  const { data, id, handleData, deleteData } = props;
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
        onClick={() => handleData(id)}
        variant="outline-success"
      >
        +
      </Button>
      <Button
        className={styles.minus}
        onClick={() => deleteData(id)}
        variant="outline-warning"
      >
        -
      </Button>
      <div>
        {data?.map((el) => {
          return (
            <div key={el.id} className={styles.postRating}>
              <div>{el.postName}</div>
              <div>
                {el.postText}
                <Star style={{ color: "ffb400" }} />{" "}
                {parseInt(ratings * 100) / 100}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostsRatingLists;
