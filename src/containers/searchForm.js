import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.categories = ['CATEGORIES', 'ALL', 'CATEGORY', 'MAIN INGREDIENTS',
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
          {this.categories.map(
            (category) => <option key={category} value={category}>{category}</option>,
          )}
        </datalist>
      </div>
    );
  }
}

export default SearchForm;
