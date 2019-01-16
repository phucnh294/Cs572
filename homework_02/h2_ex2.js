Array.prototype.even = async function(){
    const result = this.filter((n) => n%2===0);
    process.nextTick(() => console.log(result));
    return result;
};

Array.prototype.odd = function(){
    const result = this.filter((n) => n%2!==0);
    process.nextTick(() => console.log(result));
    return result;
};

console.log('start');
[1,2,3,4,5,6,7,8].even();
[1,2,3,4,5,6,7,8].odd();
console.log('end');