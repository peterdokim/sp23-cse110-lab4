function discountPrices(prices,discount){
    const discounted = [];
    const finalprice = 0;
    const length = prices.length;

    for (let i = 0; i < prices.length; i++){
        const discountedPrice = prices[i] * (1 - discount);
        //finalprice = Math.round(discountedPrice * 100) / 100;
        discounted.push(discountedPrice);
    }

    //console.log(i);
    //console.log(length);
    //console.log(finalprice);
    //console.log(discounted);
    //console.log(discountedPrice);
    return discounted;
}

discountPrices([100,200,300],0.5);