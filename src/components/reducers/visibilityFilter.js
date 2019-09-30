const visibilityFilter = (state = 'SHOW_aLL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default: return state;
  }
};

export default visibilityFilter;