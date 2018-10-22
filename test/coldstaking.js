var context = artifacts.require("./ColdStaking.sol");

contract('ColdStaking', function (accounts) {
    it("Contract Address", function () {
        return context.deployed().then(function (instance) {
            return "Contract Adress is " + context.address+ " \r\ninstance.account0:"+accounts[0];
        }).then(function (message) {
            console.log(message);
            assert.notEqual(message, null, "Contract Adress not found!");
        });
    });
});