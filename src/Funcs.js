/*
 * Functions to emulate .NET Linq filter(), take, skip and range.
 * 
 */
var Funcs = function() {

};

Funcs.ARGUMENT_EXCEPTION = "ArgumentException: invalid parameter";

Funcs.prototype.filterI = function * (items, predicate) {

    for(let item of items)
        if(predicate(item))
            yield item;
};

Funcs.prototype.filter = function (items, predicate) {

    let r = [];
    for(let item of items)
        if((!predicate)||(predicate && predicate(item)))
            r.push(item);
    return r;
};

Funcs.prototype.take = function (items, number) {
    
    let r       = [];
    let count   = 0;

    if(number === null) 
        throw new Error(Funcs.ARGUMENT_EXCEPTION);
    
    if(number === undefined) number = 0;
    if(number < 1) return [];

    for(let item of items) {
        r.push(item);
        count += 1;
        if(count == number) 
            return r;
    }
};
 
Funcs.prototype.skip = function (items, number) {
    
    let r = [];
    let count = 0;
    if(number < 1) return items;

    for(let item of items) {
        if(count >= number) 
            r.push(item);
        count += 1;
    }
    return r;
};

Funcs.prototype.range = function (start, end, step) {

    if( (!Number.isInteger(start)) || (!Number.isInteger(end)))
        throw new Error(Funcs.ARGUMENT_EXCEPTION);
    if(start > end)
        throw new Error(Funcs.ARGUMENT_EXCEPTION);
    if(start < 0)
        throw new Error(Funcs.ARGUMENT_EXCEPTION);

    let r = [];
    let current = start;
    while(current <= end) {
        r.push(current);
        current += step || 1;
    }
    return r;
};
