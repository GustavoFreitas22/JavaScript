const quaseArray = {
    0: '1',
    1: '2',
    2: '3'
}

Object.defineProperty(quaseArray, 'toString', {
    value: function(){
        return Object.values(this)
    }, enumerable: false
})
