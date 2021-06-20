import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../actions';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.categories = ['CATEGORIES', 'ALL', 'CATEGORY', 'MAIN INGREDIENTS',
      'AREA'];
    // this.state = { category: 'recipes' };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange = (event) => {
    // if (event.target.type === 'text') {
    //   this.setState({ category: event.target.value });
    // } else {
    //   this.setState({ category: event.target.value });
    // }
    changeFilter(event.target.value);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          className="input-field"
          list="category"
          placeholder="Search any keyword"
          onChange={this.handleFilterChange}
        />
        <datalist id="category" className="filter" name="category" onChange={this.handleFilterChange}>
          {this.categories.map(
            (category) => <option key={category} value={category}>{category}</option>,
          )}
        </datalist>
      </div>
    );
  }
}

// SearchForm.propTypes = {
//   changeFilter: PropTypes.func.isRequired,
// };

// const mapStateToProps = (state) => ({
//   category: state.category,
// });

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (category) => dispatch(changeFilter(category)),
});

export default connect(null, mapDispatchToProps)(SearchForm);
