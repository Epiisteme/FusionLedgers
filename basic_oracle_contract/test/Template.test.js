/* eslint-disable no-undef */
const assert = require('chai').assert // use Chai Assertion Library
const ganache = require('ganache-cli') // use ganache-cli with ethereum-bridge for Oraclize

// Configure web3 1.0.0 instead of the default version with Truffle
const Web3 = require('web3')
const provider = ganache.provider()
const web3 = new Web3(provider)

// Define the contract we'll be testing
const Template = artifacts.require('Template')

// Define tests
contract('Template', accounts => {
  // define variable to hold the instance of our Template.sol contract
  let template

  // use fresh contract for each test
  beforeEach('Setup contract for each test', async function() {
    template = await Template.new()
  })

  // check that it sends a query and receives a response
  it('sends a query and receives a response', async function() {
    // for simplicity, we'll do both checks in this function

    // set this test to timeout after 1 minute
    this.timeout(60 * 1000)

    // call the getRandomNumber function
    // make sure to send enough Ether and to set gas limit sufficiently high
    const result = await template.getRandomNumber({
      from: accounts[0],
      value: web3.utils.toWei('0.000175', 'ether'),
      gas: '3000000',
    })

    // Method 1 to check for events: loop through the "result" variable

    // look for the LogOraclizeQuery event to make sure query sent
    let testPassed = false // variable to hold status of result
    for (let i = 0; i < result.logs.length; i++) {
      let log = result.logs[i]
      if (log.event === 'LogOraclizeQuery') {
        // we found the event
        testPassed = true
      }
    }
    assert(testPassed, '"LogOraclizeQuery" event not found')

    // Method 2 to check for events: listen for them with .watch()

    // listen for LogResultReceived event to check for Oraclize's call to _callback
    // define events we want to listen for
    const LogResultReceived = template.LogResultReceived()

    // create promise so Mocha waits for value to be returned
    let checkForNumber = new Promise((resolve, reject) => {
      // watch for our LogResultReceived event
      LogResultReceived.watch(async function(error, result) {
        if (error) {
          reject(error)
        }
        // template.randomNumber() returns a BigNumber object
        const bigNumber = await template.randomNumber()
        // convert BigNumber to ordinary number
        const randomNumber = bigNumber.toNumber()
        // stop watching event and resolve promise
        LogResultReceived.stopWatching()
        resolve(randomNumber)
      }) // end LogResultReceived.watch()
    }) // end new Promise

    // call promise and wait for result
    const randomNumber = await checkForNumber
    // ensure result is within our query's min/max values
    assert.isAtLeast(randomNumber, 1, 'Random number was less than 1')
    assert.isAtMost(randomNumber, 1000, 'Random number was greater than 1000')

  }) // end 'it' block 
}) // end 'contract' block
