import React from 'react';
import AppViews from './views/AppViews';
import {renderDOM, renderView} from './views/render';
import './index.css';
import * as backend from './build/index.main.mjs';
import * as stdlib  from '@reach-sh/stdlib';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

//ALGO Wallet
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect }));

const {standardUnit} = reach;

const USDC_TOKEN='10458941';

const defaults = {standardUnit};

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {view: 'ConnectAccount',...defaults};
		//this.setState({view: 'ConnectAccount'});
	}
	async componentDidMount() {
		console.log('componet mounting');
		const acc = await reach.getDefaultAccount();
		this.state = {view: 'ConnectAccount',...defaults};
		this.setState({view: 'ConnectAccount'});
	}
	async connectWallet(){
		let acc;
		let  balAtomic ;
		try{
			acc = await reach.getDefaultAccount();
			// Find balcnce of USDC
			balAtomic=await reach.balanceOf(acc,USDC_TOKEN);
			this.props.usdcBalance=balAtomic;
			
			
		
		}catch(e){
			console.log(e);
		}
		console.log('wallet connect'+acc);
		console.log('balance '+balAtomic);
	}

	render() {return renderView(this, AppViews); }
}

renderDOM(<App />);
