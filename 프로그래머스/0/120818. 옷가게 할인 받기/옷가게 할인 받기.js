function solution(price) {
    const discounts = [
        {threshold: 500000, rate: 0.8 },
        {threshold: 300000, rate: 0.9 },
        {threshold: 100000, rate: 0.95},
    ];
    
    for(let discount of discounts) {
        if (price >= discount.threshold) {
            return Math.trunc(price * discount.rate);
        }
    }
    return price;
}