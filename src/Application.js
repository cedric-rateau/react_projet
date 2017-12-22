import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { Switch, Link, Route } from "react-router-dom";

import StoreSelection from "./components/StoreSelection";
import Store from "./components/Store";

class App extends Component {

	state = {
		text:"",
	}

	render() {
		return (
			<div className="application">
				<header className="App-header">
					<h1>{this.props.store.name}</h1>
				</header>
				<div className="content">
					{
						!this.props.store.storeValid ?
							<StoreSelection/>
						:
							<Store/>
					}
				</div>
			</div>
		);
	}

}


const mapStateToProps = (state) => ({
	store: state.store,
});


const mapActionsToProps = (dispatch) => ({
});


export default connect(mapStateToProps, mapActionsToProps)( App );