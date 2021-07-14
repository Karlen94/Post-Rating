import * as actionTypes from "./actionTypes";

const deafultState = {
  filtredData: [],
  openCommentModal: false,
  elementId: "",
  leftData: [],
  rightData: [],
};

export default function reducer(state = deafultState, action) {
  switch (action.type) {
    case actionTypes.ADD_DATA: {
      return {
        ...state,
        filtredData: action.payload,
      };
    }
    case actionTypes.TOGGLE_NEW_COMMENT_MODAL: {
      return {
        ...state,
        elementId: action.payload,
        openCommentModal: !state.openCommentModal,
      };
    }
    case actionTypes.ADD_COMMENT: {
      const filtredData = [...state.filtredData];
      filtredData.map((el) => {
        if (el.id === state.elementId) {
          return el.comments.push(action.payload);
        }
        return el;
      });
      return {
        ...state,
        filtredData: filtredData,
        openCommentModal: false,
      };
    }
    default:
      return state;
  }
}
