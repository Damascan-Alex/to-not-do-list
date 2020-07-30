import React from 'react';

class ImportanceRange extends React.Component {

  updateRange = (e) => {
    
    this.props.createColor(e.target.value);
  }

  render() {
    const { range } = this.props;
    return (
      <div>
        <input
          id="range"
          type="range"
          value={range}
          min="0"
          max="16"
          step="1"
          onChange={this.updateRange}
        />
        <span id="output">{range}</span>
      </div>
    );
  }
}

export default ImportanceRange