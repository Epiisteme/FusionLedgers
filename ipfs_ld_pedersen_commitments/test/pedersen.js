
const Pedersen = artifacts.require('Pedersen');

contract('Pedersen', (accounts) => {
    let PedersenInstance;
    let creator;
    let individualConsumer;
    let companyConsumer;


    before(async () => {
        PedersenInstance = await Pedersen.deployed();
        creator = accounts[0];
        individualConsumer = accounts[1];
        companyConsumer = accounts[2];
        
    })

    it('should be able to deploy', async () => {

        // assert.equal(dummy, 1, "not deployed correctly");
        // assert.notEqual(CompoundDAIMarketInstance.address, "0x0000000000000000000000000000000000000000");
    });


    it("should register users correctly", async () => {


        // let r1 = Math.round(Math.random()*(2**256));
        let r1 = 12312312312313;
        let a1 = 100;

        r1hex = "0x"+r1.toString(16); 
        console.log(r1hex);
        // creator
        response = await PedersenInstance.Commit.call(a1, r1hex);
        console.log(response.cX);
        console.log(response.cY);
        // console.log(cy);

        verification_status = await PedersenInstance.Verify.call(a1, r1hex, response.cX, response.cY);
        console.log(verification_status);

        //FOR STRINGS
        //let r1 = "hi";
        //let a1 = 100;
        

        //r1hex = "0x"+r1.toString(16); 
       // console.log(r1hex);
        // creator
        response = await PedersenInstance.Commit.call(a1, r1hex);
        console.log(response.cX);
        console.log(response.cY);
        // console.log(cy);

        verification_status = await PedersenInstance.Verify.call(a1, r1hex, response.cX, response.cY);
        console.log(verification_status);

        

        let a2 = 50;
        let r2 = 19823850254741169819033785099293761935467223354323761392354670518001715552183;
        r2hex = "0x"+r2.toString(16);

        response2 = await PedersenInstance.Commit.call(a2, r2hex);
        console.log(response2.cX);
        console.log(response2.cY);

        verification_status = await PedersenInstance.Verify.call(a2, r2hex, response2.cX, response2.cY);
        console.log(verification_status);
      

        response3 = await PedersenInstance.ecAdd.call(response.cX,response.cY,response2.cX,response2.cY);
        console.log(response3);


        r = r1 + r2;
        rhex = "0x" + r.toString(16);
        a = a1+a2;
        console.log(a, "\n", rhex);
        verification_status = await PedersenInstance.Verify.call(a, rhex, response3.cX3, response3.cY3);
        console.log(verification_status);
    });

    
   
})