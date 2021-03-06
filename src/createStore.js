export default function createStore(reducer) {
  // add your code here
  let state;
   
    function dispatch(action) {
      state = reducer(state, action);
      render();
    }
   
    function getState() {
      return state === undefined ? reducer(undefined, "none") : state;
    }
   
    return {
      dispatch,
      getState
    }
}

function render() {
  const container = document.getElementById('container');
}
