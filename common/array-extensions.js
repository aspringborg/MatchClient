
Object.defineProperty(Array.prototype, 'asPairs', {
    value: function asPairs() {
        return this.reduce((total, current, index, array)=> index % 2 === 0 ? [...total, [current, array[index + 1]]] : total, []);
    },
    writable: true,
    configurable: true
});