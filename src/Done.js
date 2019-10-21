import React from "react";
import { connect } from "react-redux";
function mapStateToProps(state) {
  return { done: state.done };
}
function Done(props) {
  const { done, dispatch } = props;
  return (
    <div>
      <ul>
        {done.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      {done === [] ? (
        <button
          onClick={() => {
            dispatch({ type: "CLEAR" });
          }}
          style={{ display: "none" }}
        >
          clear
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch({ type: "CLEAR" });
          }}
          style={{ display: 'block' }}
        >
          clear
        </button>
      )}
    </div>
  );
}

export default connect(mapStateToProps)(Done);
