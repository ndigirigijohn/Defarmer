<!DOCTYPE html>
<html>

<body>
  <h1>Defarmer - Peer-to-Peer Agricultural Marketplace</h1>
  
  <h2>Getting Started</h2>
  
  <h3>Prerequisites</h3>
  
  <p>To run the application locally, you need to have the following installed on your machine:</p>
  
  <ul>
    <li><a href="https://nodejs.org/en/">Node.js</a> (v14.16.0 or later)</li>
    <li><a href="https://metamask.io/">Metamask</a> (browser extension)</li>
  </ul>
  
  <h3>Installation</h3>
  
  <ol>
    <li>Clone the repository:</li>
    
    <pre><code>git clone https://github.com/your-username/defarmer.git</code></pre>
    
    <li>Change into the project directory:</li>
    
    <pre><code>cd defarmer</code></pre>
    
    <li>Install the required packages:</li>
    
    <pre><code>npm install</code></pre>
  </ol>
  
  <h3>Running the Application</h3>
  
  <ol>
    <li>Start the development server:</li>
    
    <pre><code>npm start</code></pre>
    
    <li>Open your browser and connect to the local development network in Metamask. If you haven't done this before, follow the steps below:</li>
    
    <ol type="a">
      <li>Open the Metamask extension in your browser.</li>
      <li>Click on the network dropdown at the top and select "Custom RPC".</li>
      <li>Enter <code>http://localhost:8545</code> in the "New RPC URL" field and click "Save".</li>
    </ol>
    
    <li>Navigate to <code>http://localhost:3000</code> in your browser to access the application.</li>
  </ol>
  
  <h3>Testing</h3>
  
  <p>To run the tests for the smart contracts:</p>
  
  <pre><code>npm run test</code></pre>
  
  <h3>Deployment</h3>
  
  <p>To deploy the smart contracts to the Ethereum blockchain:</p>
  
  <ol>
    <li>Add your Infura project ID and your Metamask mnemonic to the <code>.env</code> file:</li>
    
    <pre><code>REACT_APP_INFURA_PROJECT_ID=&lt;your Infura project ID&gt;
MNEMONIC=&lt;your Metamask mnemonic&gt;</code></pre>
    
    <li>Compile and deploy the smart contracts:</li>
    
    <pre><code>npm run deploy</code></pre>
  </ol>
  
  <h2>Built With</h2>
  
  <ul>
    <li><a href="https://reactjs.org/">ReactJS</a> - A JavaScript library for building user interfaces.</li>
    <li><a href="https://soliditylang.org/">Solidity</a> - A contract-oriented programming language for writing smart contracts.</li>
    <li><a href="https://www.trufflesuite.com/">Truffle</a> - A development environment, testing framework

and asset pipeline for Ethereum.</li>
<li><a href="https://web3js.readthedocs.io/en/v1.3.4/">web3.js</a> - A collection of libraries that allow you to interact with a local or remote Ethereum node using HTTP, IPC or WebSocket.</li>

  </ul>
  <h2>Contributing</h2>
  <p>Please read <code>CONTRIBUTING.md</code> for details on our code of conduct, and the process for submitting pull requests to us.</p>
  <h2>Authors</h2>
  <ul>
    <li>John Doe - <a href="https://github.com/johndoe">johndoe</a></li>
    <li>Jane Smith - <a href="https://github.com/janesmith">janesmith</a></li>
  </ul>
  <h2>License</h2>
  <p>This project is licensed under the MIT License - see the <code>LICENSE.md</code> file for details.</p>
</body>
</html>
