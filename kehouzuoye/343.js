var integerBreak = function(n) {
    if(n <= 3) return n - 1;
    let a = ~~(n / 3), b = n % 3;
    if(!b) return 3 ** a;
    if(b === 1) return (3 ** (a - 1)) * 4;
    return 3 ** a * 2;
};