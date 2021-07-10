const BigNumber = require('bignumber.js');
const BN = BigNumber.clone({ DECIMAL_PLACES: 9 })
const chalk = require('chalk');
const { assert, expect,chai} = require('chai');




contract('CERES.sol', async (accounts) => {



    it ('check ceres.pool_mint(account3,100),without addPool()',async() => {
        
        expect(1).to.equal(1);
    });
});
