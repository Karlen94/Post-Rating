import React, { PureComponent } from "react";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from '@material-ui/icons/StarBorder';



class RatingStar extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {

    return (
      <div>
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
