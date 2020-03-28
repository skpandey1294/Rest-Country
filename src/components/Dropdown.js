import React, { Component } from 'react';

class Dropdown extends Component {
  render() {
    return (
      <div>
        <select>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    );
  }
}

export default Dropdown;
