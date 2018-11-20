import React, { Component } from 'react';
import { Spring, Transition, Trail } from 'react-spring'
import './Play.css';

class Play extends Component {
  constructor(props) {
    super(props);
  }

// items = [{key:1, text:1},{key:2, text:2},{key:3, text:3},{key:4, text:4}];

  render() {
	const items = [{key:1, text:1234},{key:2, text:2},{key:3, text:3},{key:4, text:4}];
	window.addEventListener( 'load', function() {
		var box = document.getElementById('box'),
			docHeight = document.documentElement.offsetHeight;
		
		window.addEventListener( 'scroll', function() {
			  // normalize scroll position as percentage
		  var scrolled = window.scrollY / ( docHeight - window.innerHeight ),
			  transformValue = `scale(${(scrolled*25)+1})`;
			  this.console.log(scrolled, ' Waht the f is going on?')
	  
		  box.style.WebkitTransform = transformValue;
		  box.style.MozTransform = transformValue;
		  box.style.OTransform = transformValue;
		  box.style.transform = transformValue;
		  
		}, false);
		
	  }, false);
    return (
		<div>
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
<div id="container">
	<div id="box">
		<div className="takeSpace"></div>
		<svg id="svg" xmlns="http://www.w3.org/2000/svg" width="420" height="630" viewBox="0 0 420 630" class="hide-laptop">
			<path d="M 420 630 L 0 630 L 0 420 L 210 630 L 210 420 L 420 420 L 210 210 L 0 210 L 0 0 L 420 0 L 420 200 Z" fill="rgba(255, 255, 255, 1.00)"></path>
		</svg>
		<div className="takeSpace"></div></div>
	</div>	
</div>
    )
  }
}

export default Play;