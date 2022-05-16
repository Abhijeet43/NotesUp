const trashReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_TRASH":
      return { ...state, trash: action.payload };
    case "ADD_TO_TRASH":
      return { ...state, trash: action.payload };
    case "REMOVE_FROM_TRASH":
      return { ...state, trash: action.payload };
    default:
      return state;
  }
};

export { trashReducer };
