import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.items = ['CATEGORIES', 'ALL', 'CATEGORY', 'MAIN INGREDIENTS',
      'AREA'];
  }

  render() {
    return (
      <div>
        <input
          type="text"
          className="input-field"
          list="category"
          placeholder="Search any keyword"
        />
        <datalist id="category" className="filter" name="category">
          {this.items.map(
            (item) => <option key={item} value={item}>{category}</option>,
          )}
        </datalist>
      </div>
    );
  }
}

export default SearchForm;
