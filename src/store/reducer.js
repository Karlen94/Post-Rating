import * as actionTypes from "./actionTypes";

const deafultState = {
  filtredData: [],
  openCommentModal: false,
  elementId: "",
  leftData: [],
  rightData: [],
  boolean: false,
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
      const arr = [];
      for (let i = 0; i < state.filtredData.length; i++) {
        arr.push(state.filtredData[i]);
        if (state.filtredData[i].id === state.elementId) {
          state.filtredData[i].comments.push(action.payload);
        }
      }

      return {
        ...state,
        filtredData: arr,
        boolean: !state.boolean,
        openCommentModal: false,
      };
    }
    default:
      return state;
  }
}
