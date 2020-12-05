class Math {
    sum(a, b, callback) {
        setTimeout(() => {
            callback(a + b);
        }, 1000);        
    }
}

module.exports = Math;