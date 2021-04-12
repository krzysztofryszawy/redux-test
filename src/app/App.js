import React, { Component } from 'react';
import './App.css';
import User from './components/User';
import { connect } from 'react-redux';
import { database } from './temporary';

class App extends Component {
  render() {
    const priceWithoutVAT = 150000;
    console.log(this.props);
    console.log(database);
    const calc = database.calculation;

    return (
      <div className="App">
        <header className="App-header">
          <p>{calc(priceWithoutVAT)}</p>
          <p>Redux test App</p>
          <User
            username={this.props.user.name}
            setUsername={() => this.props.setName('Iza')}
          />
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer,
    math: state.mathReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: name => {
      dispatch({
        type: 'SET_NAME',
        payload: name
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
