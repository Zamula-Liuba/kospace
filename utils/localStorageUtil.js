class LocalStorageUtil {
    constructor() {
        this.keyName = 'products';
    }

    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage)
        }
        return [];
    }

    putProducts() {
        let products = this.getProducts();
        let pushProduct = false;
        const index = products.indexOf(id);

        if (index === -1) {
           products.push(id);
           pushProduct = true;
        } else {
            products.splice(index, 1);
        }

        
        localSrorage.setItem(this.keyName, JSON.stringify(products))

        return { pushProducts, products }
    }
}

const localStorageUtil = new LocalStorageUtil;
