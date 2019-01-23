import React from 'react';
import { connect } from 'react-redux';
import SearchPanel from './SearchPanel'
import ResultContainer from '../ResultContainer';
import './SearchContainer.css';
import { getData, uploadMore } from '../../reducers/data';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import classNames from 'classnames';

const mapStateToProps = (state) => ({
  isFetching: state.data.isFetching,
  isFetchingAgain: state.data.isFetchingAgain,
  result: state.data.result,
  articles: state.data.articles
});

const mapDispatchToProps = (dispatch) => ({
  getData: (queryString) => dispatch(getData(queryString)),
  uploadMore: (queryString, page) => dispatch(uploadMore(queryString, page))
});

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queryString: '',
      pages: 0
    };
  }

  textFieldHandler = () => (event) => {
    this.setState({
      queryString: event.target.value
    });
  };

  search = () => {
    this.setState({pages: 0});
    this.props.getData(this.state.queryString);
  }

  uploadMore = () => {
    this.setState(
      {pages: this.state.pages + 1},
      () => this.props.uploadMore(this.state.queryString, this.state.pages)
    );  
  }

  render() {
    return (
      <>
        <SearchPanel
          textFieldHandler={this.textFieldHandler()}
          search={this.search}
          value={this.state.queryString}
        />
        <Paper className={classNames('resultWrapper', {visible: this.props.isFetching || this.props.result})}>
          {this.props.isFetching ? <CircularProgress disableShrink /> : null}
          {
            this.props.articles.length
              ? <ResultContainer
                  list={this.props.articles}
                  uploadMore={this.uploadMore}
                  isFetchingAgain={this.props.isFetchingAgain}/>
              : null
          }
          {
            this.props.isFetching || this.props.articles.length
              ? null
              : this.props.result ? <p className="notFound">Not found...</p> : null
          }
        </Paper>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);