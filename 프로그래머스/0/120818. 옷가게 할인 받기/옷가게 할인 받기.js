function solution(price) {
    
    let saledPrice;
    
    if(price >= 500000) {
        saledPrice = price*0.8;
    }else if(price >= 300000) {
        saledPrice = price*0.9;
    }else if(price >= 100000) {
        saledPrice = price*0.95;
    }else{
        // 10만원 미만은 할인x
        saledPrice = price
    }
    
    return Math.trunc(saledPrice)
    
    
}