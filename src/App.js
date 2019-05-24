import React, { Component } from 'react';
import './App.css';
import Chart from './visualizations/Chart';
import BarCharley from './visualizations/BarCharley';
import Radial from './visualizations/Radial';
import LineChart from './visualizations/LineChart';

//Pulled out the standard functional component and replaced with class-based
class App extends Component {
  state = {
    temps: {},
    city: 'dc', //default on start
  };

  componentDidMount() {
      Promise.all([
        fetch(`${process.env.PUBLIC_URL}/dc.json`), //fetch
        fetch(`${process.env.PUBLIC_URL}/ny.json`), //fetch again
        fetch(`${process.env.PUBLIC_URL}/atl.json`), //absolutely fetching
      ]).then(responses => Promise.all(responses.map(resp => resp.json())))
      .then(([dc, ny, atl]) => {
        dc.forEach(day => day.date = new Date(day.date)); //sets to state
        ny.forEach(day => day.date = new Date(day.date)); //ditto
        //then
        this.setState({temps: {dc, ny, atl}});
      });
    }

    updateCity = (e) => {
    this.setState({city: e.target.value});
  }
  render() { //renders a dropdown of the data in state
    const data = this.state.temps[this.state.city]; // TODO: why is this an array but e.target.value is not?


  return (
      <div className="App">
        <h1>
          2017 Temperatures in
          <select name='city' onChange={this.updateCity}>
            {
              [
                {label: 'Washington, D.C.', value: 'dc'},
                {label: 'New York', value: 'ny'},
              ].map(option => {
                return (<option key={option.value} value={option.value}>{option.label}</option>);
              })
            }
          </select>
        </h1>
        <LineChart data={data} />
        <BarCharley data={data} />
        <br />
        <Chart data={data} />
        <Radial data={data} />

        <p>
          (Temperature Information Provided By: <a href='wunderground.com' target='_new'>Wunderground</a>)
        </p>
      </div>
    );
  }
}

export default App;
