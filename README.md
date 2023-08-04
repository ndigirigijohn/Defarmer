
  ## Defarmer - Peer-to-Peer Agricultural Marketplace
  ### Getting Started
  #### Prerequisites
  
  To run the application locally, you need to have the following installed on your machine:
  
  <ul>
    <li><a href="https://nodejs.org/en/">Node.js</a> (v14.16.0 or later)</li>
    <li><a href="https://metamask.io/">Metamask</a> (browser extension)</li>
  </ul>
  
  <h3>Installation</h3>
  
  <ol>
    <li>Clone the repository:</li>
    
  git clone https://github.com/your-username/defarmer.git
    
   Change into the project directory:>
    
   <code>cd defarmer</code>
    
   Install the required packages:
    
  <code>npm install</code>
  </ol>
  
  <h3>Running the Application</h3>
  
  <ol>
    <li>Start the development server:</li>
    
   `npm start`
    
   Open your browser and connect to the local development network in Metamask. If you haven't done this before, follow the steps below:
    
  
    Open the Metamask extension in your browser
   Click on the network dropdown at the top and select "Custom RPC".
    Enter <code>http://localhost:8545</code> in the "New RPC URL" field and click "Save".
   
    
   Navigate to <code>http://localhost:3000</code> in your browser to access the application.
  </ol>
  
  <h3>Testing</h3>
  
  <p>To run the tests for the smart contracts:</p>
  
  <pre><code>npm run test</code></pre>
  
  <h3>Deployment</h3>
  
  <p>To deploy the smart contracts to the Ethereum blockchain:</p>
  
  <ol>
    <li>Add your Infura project ID and your Metamask mnemonic to the <code>.env</code> file:</li>
    
   <code>REACT_APP_INFURA_PROJECT_ID=&lt;your Infura project ID&gt;
MNEMONIC=&lt;your Metamask mnemonic&gt;</code>
    
   Compile and deploy the smart contracts:
    
  <code>npm run deploy</code>
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
    <li>John - <a href="https://github.com/ndigirigijohn">ndigirigijohn</a></li>
      <li>Oliver - <a href="https://github.com/OliverMengich">OliverMengich</a></li>  
      <li>Nouva - <a href="https://github.com/katchietsnouva">katchietsnouva</a></li>
    <li>Victor - <a href="https://github.com/devlaukey">devlaukey</a></li>
  </ul>
  <h2>License</h2>
  <p>This project is licensed under the MIT License - see the <code>LICENSE.md</code> file for details.</p>
</body>
</html>
