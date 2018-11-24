import React, { Component } from 'react';
import { Spring, Transition, Trail } from 'react-spring'
import './Play.css';
import { render } from "react-dom";
import Plx from "react-plx";
import PostsBoard from '../PostsBoard/PostsBoard.jsx';
import Header from '../Header/Header.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from '../../2.png';

const styles = {
  width: 100,
  height: 100,
  lineHeight: "100px",
  textAlign: "center",
  borderRadius: 20,
  backgroundColor: "#34ba9c",
  color: "#fff",
  left: "50%",
  marginLeft: -50,
  top: 100,
  position: "fixed",
  fontFamily: "Helvetica, Arial, sans-serif"
};

class Play extends Component {
  constructor(props) {
		super(props);
		this.state = { state: 0}
  }

// items = [{key:1, text:1},{key:2, text:2},{key:3, text:3},{key:4, text:4}];

textData = [
  {
    start: '.StickyText-trigger',
    duration: 7000,
    properties: [
      {
        startValue: 0,
        endValue: 0,
        unit: 'vh',
        property: 'translateY',
      },
      {
        startValue: 1,
        endValue: 1,
        property: 'opacity',
      },
    ],
	},
	{
		start: '.StickyText-trigger',
		startOffset: 1200,
    duration: 610,
    properties: [
      {
        startValue: 0,
        endValue: -100,
        unit: 'vh',
        property: 'translateY',
      },
      {
        startValue: 1,
        endValue: 1,
        property: 'opacity',
      },
    ],
	},
	{
    start: '.StickyText-trigger',
		duration: 7000,
		startOffset: 1800,
    properties: [
      {
        startValue: -100,
        endValue: -100,
        unit: 'vh',
        property: 'translateY',
      },
      {
        startValue: 1,
        endValue: 1,
        property: 'opacity',
      },
    ],
	},
];

scrollFunc = () => {
	var box = document.getElementById('box'),
		docHeight = document.documentElement.offsetHeight;
	
	window.addEventListener( 'scroll', function() {
			// normalize scroll position as percentage
		var scrolled = window.scrollY / ( docHeight - window.innerHeight ),
			transformValue = `scale(${(scrolled*30)+1})`;
			// this.console.log(transformValue, ' Waht the f is going on?');
			// if(transformValue>10.3){
			// 	this.textData[0].duration = 100;
			// 	if (this.textData[0].duration === 100 ){
			// 		this.console.log('THIS FUCKING WORKED')
			// 	}
			// } else if (transformValue<=10.3){
			// 	this.textData[0].duration = 7000;
			// }
	
		box.style.WebkitTransform = transformValue;
		box.style.MozTransform = transformValue;
		box.style.OTransform = transformValue;
		box.style.transform = transformValue;
		
	}, false);
	
	};

componentDidMount () {
	const items = [{key:1, text:1234},{key:2, text:2},{key:3, text:3},{key:4, text:4}];
	window.addEventListener( 'load', this.scrollFunc(), false);
}

componentWillUnmount() {
  document.removeEventListener("load", this.scrollFunc());
}

login() {
	this.props.auth.login();
}

  render() {
		console.log(this.props, 'this going to da kine?')
    return (
		<div>
			{/* <div style={{height: '600px', backgroundColor: 'black'}} />
			<div style={{height: '600px', backgroundColor: 'blue'}} />
			<div style={{height: '600px', backgroundColor: 'greenyellow'}} className='StickyText-trigger' />
       
			<Plx 
        className='Pic'
        parallaxData={ textData }
      >
        <svg id="svg" xmlns="http://www.w3.org/2000/svg" width="420" height="630" viewBox="0 0 420 630" className="hide-laptop">
			<path d="M 420 630 L 0 630 L 0 420 L 210 630 L 210 420 L 420 420 L 210 210 L 0 210 L 0 0 L 420 0 L 420 200 Z" fill="rgba(255, 255, 255, 1.00)"></path>
		</svg>
      </Plx> */}
{/* <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
  {props => <div style={props}>hello</div>}
</Spring>
<Trail
  items={items} keys={item => item.key}
  from={{ transform: 'translate3d(0,-40px,0)' }}
  to={{ transform: 'translate3d(0,0px,0)' }}>
  {item => props =>
    <span style={props}>{item.text}</span>
  }
</Trail> */}

        {/* Other elements can be in between `StickyContainer` and `Sticky`,
				but certain styles can break the positioning logic used. */}
				<div id="container" style={{backgroundColor: 'lightgreen'}}>
				<Plx
        className='Pic'
        parallaxData={ this.textData }
      >
			<video id="video" autoPlay="true" width="70%" height="70%" loop="loop" muted="muted" vector-effect="non-scaling-stroke" >
        <source src="https://static.framer.com/x/frontpage/hero.mp4" type="video/mp4" />
      </video>
</Plx>
	<div id="box">
		<div className="takeSpace1"><div id="imgBox2">
              <Link to={'/'} ><img src={logo} alt="logo" /></Link>
            </div><div id="homeHeader"><h1 id="app-title"><Link style={{ color: "black" }} to={'/'} >two<span style={{ fontSize: "18px" }}> </span>cents</Link></h1></div>
		</div>
		<svg id="svg" xmlns="http://www.w3.org/2000/svg" width="420" height="630" viewBox="0 0 420 630" className="hide-laptop">
			<path d="M 420 630 L 0 630 L 0 420 L 210 630 L 210 420 L 420 420 L 210 210 L 0 210 L 0 0 L 420 0 L 420 200 Z" fill="rgba(255, 255, 255, 1.00)"></path>
		</svg>
		<div className="takeSpace2"><p className="homeLogin" id="loginBtn" onClick={this.login.bind(this)}>LOGIN  &nbsp; ||  &nbsp; ABOUT</p></div></div>
		<div style={{height: '0px', backgroundColor: 'white'}} className="StickyText-trigger" />
	</div>
	<div style={{height: '1100px', backgroundColor: 'black'}} />
	<Header auth={this.props.auth} {...this.props} />
	<PostsBoard auth={this.props.auth} {...this.props} />
</div>
    )
  }
}

export default Play;



{/* <div id="container">
				<Plx
        className='StickyText'
        parallaxData={ textData }
      >
<video id="video" autoPlay="true" width="70%" height="70%" loop="loop" muted="muted">
        <source src="https://static.framer.com/x/frontpage/hero.mp4" type="video/mp4" />
      </video></Plx>
	<div id="box">
		<div className="takeSpace"></div>
		<svg id="svg" xmlns="http://www.w3.org/2000/svg" width="420" height="630" viewBox="0 0 420 630" className="hide-laptop">
			<path d="M 420 630 L 0 630 L 0 420 L 210 630 L 210 420 L 420 420 L 210 210 L 0 210 L 0 0 L 420 0 L 420 200 Z" fill="rgba(255, 255, 255, 1.00)"></path>
		</svg>
		<div className="takeSpace"></div></div>
		<div style={{height: '600px', backgroundColor: 'greenyellow'}} className='StickyText-trigger' />
	</div>  */}

{/* <p> text texttext texttext texttext texttext texttext texttext texttext texttext texttext texttext texttext texttext texttext texttext texttext text </p> */}