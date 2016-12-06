var React = require('react');
var DefaultLayout = require('./layouts/master');

var IndexComponent = React.createClass({
	render : function () {
		return (
			<div>
				<DefaultLayout name = {this.props.name}>
					<div>
						This is react
					</div>
				</DefaultLayout> 
			 </div>
		);
	}
});

module.exports = IndexComponent;