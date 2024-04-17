export class Basket {
    constructor(contents) {
        this.contents = [];
    }
};

export class Bagel {
    constructor(type) {
        this.type = type;
    }
};

export const addToBasket = (toAdd, addTo) => {
    addTo.contents.push(toAdd);
    console.log(addTo.contents);
    return addTo.contents;
}