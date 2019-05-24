import React, { Component } from 'react';
import * as d3 from 'd3';
import chroma from 'chroma-js';

const width = 650;
const height = 400;
const margin = {top: 20, right: 5, bottom: 20, left: 35};
const red = '#eb6a5b';
const green = '#b6e86f';
const blue = '#52b6ca';
const colors = chroma.scale([blue, green, red]); //colors have to be declared before used here

class Chart extends Component {
  state = {
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const {data} = nextProps;
    if (!data) return {};

    return {};
  }

  render() {
    return (
      <svg width={width} height={height}>
      </svg>
    );
  }
}

export default Chart;

// class Chart extends Component {
// 	state = {
// 		highs: null,
// 		low: null,
// 	};

// 	xScale = d3.scaleTime().range([margin.left, width - margin.right]);
// 	yScale = d3.scaleLinear().range([0, width / 2]);
// 	lineGenerator = d3.line();
//
// 	xAxis = d3.axisBottom().scale(this.xScale)
// 		.tickFormat(d3.timeFormat('%b'));
// 	yAxis = d3.axisLeft().scale(this.yScale)
// 		.tickFormat(d => `${d}℉`);
//
// 	componentWillRecieveProps(nextProps) {
// 		const {data} = nextProps;
// 		if (!data) return; //back to empty if no data. WHY does ! mean 'No' in JS?
//
// 		const timeDomain = d3.extent(data, d => d.date); //update time scale
// 		const tempMax = d3.max(data, d => d.high);  //update temp scale
// 		this.xScale.domain(timeDomain);
// 		this.yScale.domain([0, tempMax]);
//
// 		this.lineGenerator.x(d => this.xScale(d.date)); //date line
// 		this.lineGenerator.y(d => this.yScale(d.high)); //high temp line
// 		const highs = this.lineGenerator(data);
//
// 		this.lineGenerator.y(d => this.yScale(d.low));
// 		const lows = this.lineGenerator(data); //low temps
//
// 		console.log(highs)
// 		this.setState({highs, lows});
// 	}
//
// 	componentDidUpdate() { //
// 		d3.select(this.refs.)
// 	}
//
// 	// static getDerivedStateFromProps(nextProps, prevState) {
// 	// 	const {data} = nextProps;
// 	// 	if (!data) return {};
// 	//
// 	// 	return {};
// 	// }
//
// 	render() {
// 		return (
// 			<svg width={width} height={height}>
// 				<path d={this.state.highs} fill='none' stroke={red} /> {//path element high
// 				<path d={this.state.highs} fill='none' stroke={blue} /> //path element low}
//
// 			<g>
// 				<g ref='xAxis' />
// 				<g ref='yAxis' />
// 			</g>
// 			</svg>
// 		);
// 	}
// }
//
// export default Chart;
