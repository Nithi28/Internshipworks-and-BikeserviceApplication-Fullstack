function inverse_slice(arr,start,end){
    return arr.slice(0,start).concat(arr.slice(end));
}
console.log( inverse_slice([12, 14, 63, 72, 55, 24], 2, 4));
