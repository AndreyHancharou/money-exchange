// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let money = {};
    let H = Math.floor(currency/50);
    let Q = Math.floor((currency-H*50)/25);
    let D = Math.floor((currency-H*50-Q*25)/10);
    let N = Math.floor((currency-H*50-Q*25-D*10)/5);
    let P = Math.floor((currency-H*50-Q*25-D*10-N*5)/1);
   
    if (currency >= 10000) {
        money.error = "You are rich, my friend! We don't have so much coins for exchange";
    } else {
        if (H > 0) {
            money.H = H;
        }
        if (Q > 0) {
            money.Q = Q;
        }
        if (D > 0) {
            money.D = D;
        }
        if (N > 0) {
            money.N = N;
        }
        if (P > 0) {
            money.P = P;
        }
    }

    return money;
}
