const init = {
  click: false,
};

function clickReducer(state = init, action) {
  if (action.type === "click") {
    return {
      ...state,
      click: action.payload.click,
    };
  }
  return state;
}

export default clickReducer;
