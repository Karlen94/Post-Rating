import * as actionTypes from "./actionTypes";

export const addData = (data) => {
  return {
    type: actionTypes.ADD_DATA,
    payload: data,
  };
};

export const toggleNewCommentModal = (id = "") => {
  return {
    type: actionTypes.TOGGLE_NEW_COMMENT_MODAL,
    payload: id,
  };
};

export const addComment = (element) => {
  return {
    type: actionTypes.ADD_COMMENT,
    payload: element,
  };
};
