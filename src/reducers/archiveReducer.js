const archiveReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_ARCHIVES":
      return { ...state, archives: action.payload };
    case "ADD_TO_ARCHIVES":
      return { ...state, archives: action.payload };
    case "REMOVE_FROM_ARCHIVES":
      return { ...state, archives: action.payload };
    default:
      return state;
  }
};

export { archiveReducer };
