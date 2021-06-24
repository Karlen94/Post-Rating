import React, { PureComponent } from "react";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import styles from "./ratingStar.module.css";



class RatingStar extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {

    return (
      <div className={styles.ratingDiv}>
        <Rating
          name="customized-empty"
          defaultValue={this.props.rating}
          precision={0.5}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
        />
      </div>
    );
  }
}

export default RatingStar;
