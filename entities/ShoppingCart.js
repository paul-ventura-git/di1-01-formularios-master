export default class ShoppingCart {
    constructor() {
        this.items = [];
    }
    
    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        this.items = this.items.filter(i => i !== item);
    }

    clear() {
        this.items = [];
    }
}