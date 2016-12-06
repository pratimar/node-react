var React = require('react');

var MasterLayout = React.createClass({
	render : function () {
		return (
			<html>
				<head>
					<title>{this.props.name} </title>
				</head>
				<body>
					<div id="container">
						{this.props.children}
					</div>
				</body>
			</html>
		);
	}
});

module.exports = MasterLayout;