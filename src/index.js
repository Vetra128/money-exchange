// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let obj = {};
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    if (currency <= 0) {
        return {};
    }
    let H =0;
    let Q =0;
    let D =0;
    let N =0;
    let P =0;
    let c = currency;
    H = Math.floor(c / 50);
    c = c - H * 50;
    Q = Math.floor(c / 25);
    c = c - Q * 25;
    D = Math.floor(c / 10);
    c = c - D * 10;
    N = Math.floor(c / 5);
    c = c - N * 5;
    P = Math.floor(c / 1);

    if (H) {
        obj["H"] = H;
    }
    if (Q) {
        obj["Q"] = Q;
    }
    if (D) {
        obj["D"] = D;
    }
    if (N) {
        obj["N"] = N;
    }
    if (P) {
        obj["P"] = P;
    }
    return obj;
};
