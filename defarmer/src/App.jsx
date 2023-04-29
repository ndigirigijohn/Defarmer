import React, { useEffect } from 'react';
import './App.css';
import Defarmer from '../src/abis/Defarmer.json'
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';
import UserAccount from './pages/User_Account/user-account';
import Vendors from './pages/Vendors/vendors';
import BlockchainContext from './context/blockchain.context';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import BuyPage from './pages/buy/buy-item';
import HomePage from './pages/Home/HomePage';
import Defaultpage from './pages/default/defaultpage.component';
export default async function App() {
    useEffect(()=>{
        const componentDidMount = async()=>{
           await loadWeb3();
        }
        componentDidMount();
    },[])
    const [state,setState]= useState({
        web3Window: null,
        account: null,
        contract: null,
        agriProducts: []
    })
    const loadWeb3 =async ()=>{
        const provider = await detectEthereumProvider();
        if(provider){
        window.web3 = new Web3(provider);
        await loadBlockchainData();
        }else{
        window.web3 =null;
        alert('PLEASE INSTALL METAMASK!!')
        }
    }
    const loadBlockchainData= async()=>{
        const web3 = window.web3
        const accounts = await web3.eth.requestAccounts();
        console.log(accounts);
        setState({
            account: accounts[0],
            web3Window: web3
        })
        const networkId = await web3.eth.net.getId();
        const networkData = Defarmer.networks[networkId];
        if(networkData){
        const abi = Defarmer.abi;
        const address = networkData.address;
        const contract = new web3.eth.Contract(abi,address);
        const Products = await contract.methods.totalCommodity().call();
        await setState({
            contract,
            agriProducts: Products
        });
        }
        else {
            window.alert('Smart contract not deployed')
        }
    }
    return (
      <BrowserRouter>
        <BlockchainContext.Provider
            value={{
                account: state.account,
                contract: state.contract,
                agriProducts: state.agriProducts,
                web3: state.web3Window
            }}
            >
            <Routes>
                <Route path='/' element={<Defaultpage/>}/>
                <Route path='/products' element={<HomePage/>}/>
                <Route path='/user' element={<UserAccount/>} />
                <Route path='/vendors' element={<Vendors/>} />
                <Route path='/buy' element={<BuyPage/>} />
            </Routes>
        </BlockchainContext.Provider>
      </BrowserRouter>
    );
}


