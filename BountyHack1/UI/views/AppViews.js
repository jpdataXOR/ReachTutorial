import React from 'react';

const exports = {};

exports.Wrapper = class extends React.Component {
	render() {
		const {content} = this.props;
		return (
			<div id ="root">
				<div className="window">
					<h1>Index Fund</h1>
				</div>
					{content}
			</div>
			);
	}
}

exports.ConnectAccount2 = class extends React.Component {

	render() {
		const {parent} = this.props;
		return (
			<div>
				<div className="window">
					<p>You have connected a wallet.	<button
					onClick={() => parent.connectWallet()}>Connect Wallet</button></p>
				</div>
				<div className="window white">
					<p>Amount Locked</p>
					<p>($amount locked)	<button>Withdraw</button></p>
				</div>
				<div className="window white">
					<p>Please enter amount to Deposit:</p>
					<div>
						<input type="number" placeholder="Enter here... (USD)"></input>	<button>Deposit</button>	<select name="etf" id="etf-select">
							<option value="">Please select an ETF</option>
							<option value="etf1">ETF1</option>
							<option value="etf2">ETF2</option>
							<option value="etfx">ETFx...</option>
						</select>
					</div>
				</div>
				<div className="window">
					<p>* Please note content in this window will only popup on successful deposit *</p>
					<p>Amount ($amount) Successfully deposited in (ETFx).</p>
				</div>



				<div className="window">
					<p>* Clarify if this is a seperate screen, here for testing and viewing purposes. *</p>
				</div>
				<div className="window white">
					<p>Amount Locked with (ETFx)</p>
					<select name="etf" id="etf-select">
							<option value="">Please select an ETF</option>
							<option value="etf1">ETF1</option>
							<option value="etf2">ETF2</option>
							<option value="etfx">ETFx...</option>
						</select>
					<p>($amount locked with ETFx)	<button>Withdraw</button></p>
				</div>
				<div className="window white">
					<p>Please enter amount to Deposit:</p>
					<div>
						<input type="number" placeholder="Enter here... (USD)"></input>	<button>Deposit</button>	
					</div>
				</div>
				<div className="window">
					<p>* Please note content in this window will only popup on withdraw amount *</p>
					<p>Thanks next withdrawal for (ETFx) is on (date) you will get back this ($amount) in your wallet.</p>
				</div>


			</div>
			)
	}

}

exports.ConnectAccount = class extends React.Component {
	render() {
		const {parent} = this.props;
		return (
			<div>
				<div className="window">
					<p>
				    You have connected a wallet with { ...parent.props } </p><p><button
					onClick={() => parent.connectWallet()}>Connect Wallet</button>
					</p>
				</div>
				
			</div>
			)
	}
}

export default exports;