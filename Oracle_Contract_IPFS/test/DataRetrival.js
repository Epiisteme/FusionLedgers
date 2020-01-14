const {
  PREFIX,
  waitForEvent
} = require('./utils')

const Web3 = require('web3')
const data = artifacts.require('./DataRetrival.sol')
const web3 = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:9545'))

contract('DataRetrival Tests', accounts => {
  console.log
  let contractInfo
  const gasAmt = 3e6
  const address = accounts[0]

  beforeEach(async () => (
    { contract } = await data.deployed(),
    { methods, events } = new web3.eth.Contract(
      contract._jsonInterface,
      contract._address
    )
  ))

  it('Should have logged a new Provable query', async () => {
    const {
      returnValues: {
        description
      }
    } = await waitForEvent(events.LogNewProvableQuery)
    assert.strictEqual(
      description,
      'Provable query was sent, standing by for the answer...',
      'Provable query incorrectly logged!'
    )
  })

  it('Callback should have logged new information', async () => {
    const {
      returnValues: {
        information
      }
    } = await waitForEvent(events.LogNewInfo)
    console.log(information)
  })

  /*it('Should set information correctly in contract', async () => {
    const queriedInfo = await methods
      .info()
      .call()
    assert.strictEqual(
      contractInfo,
      queriedInfo,
      'neha'
    )
  })*/

})
