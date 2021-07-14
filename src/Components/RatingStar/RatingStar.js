import React from "react";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import styles from "./ratingStar.module.css";

const RatingStar = (props) => {
  return (
    <div className={styles.ratingDiv}>
      <Rating
        name="customized-empty"
        defaultValue={props.rating}
        precision={0.5}
        emptyIcon={<StarBorderIcon fontSize="inherit" />}
      />
    </div>
  );
};

export default RatingStar;
