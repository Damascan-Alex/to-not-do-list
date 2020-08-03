import React from "react";
const ImportanceRange = (props) => {
  const {
    input: { value, onChange },
  } = props;
  return (
    <div>
      <input
        id='range'
        type='range'
        value={value}
        min='0'
        max='16'
        step='1'
        // onChange={this.updateRange}
        onChange={onChange}
      />
      <span id='output'>{value}</span>
    </div>
  );
};

export default ImportanceRange;
