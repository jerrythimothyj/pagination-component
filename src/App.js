import React, { Component } from 'react';
import Pagination from './components/pagination/pagination';

class App extends Component {

  state = {
    totalItems: 999,
    itemsPerPage: 10,
    currentPage: 3
  };


  navToPage = (page) => {
    this.setState({ currentPage: page });
  }

  render() {


    return (
      <div>
        <Pagination
          totalItems={this.state.totalItems}
          itemsPerPage={this.state.itemsPerPage}
          currentPage={this.state.currentPage}
          navToPage={this.navToPage}
        />
      </div>
    );
  }
}

export default App;
