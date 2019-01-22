import React from 'react';
import { connect } from 'react-redux';
import SearchPanel from './SearchPanel'
import './SearchContainer.css';
import { getData } from '../../reducers/data';

const mapStateToProps = (state) => ({
  isFetching: state.data.isFetching
});

const mapDispatchToProps = (dispatch) => ({
  getData: (queryString) => dispatch(getData(queryString)),
});

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queryString: ''
    };
  }

  textFieldHandler = () => (event) => {
    this.setState({
      queryString: event.target.value
    });
  };

  search = () => (event) => {
    this.props.getData(this.state.queryString);
  }

  render() {
    return (
      <>
        <SearchPanel
          textFieldHandler={this.textFieldHandler()}
          search={this.search()}
          value={this.state.queryString}
        />
        {this.props.isFetching ? <p>LOADING!</p> : <p>DONE!</p>}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);