export class Basket {
    constructor(contents) {
        this.contents = [];
    }
};

export class Bagel {
    constructor(id) {
        this.ID = id;
    }
};

export const addToBasket = (toAdd, addTo) => {
    addTo.contents.push(toAdd);
    console.log(addTo.contents);
    return addTo;
}