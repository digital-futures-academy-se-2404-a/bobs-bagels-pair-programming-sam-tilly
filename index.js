export function Basket(contents) {
    this.contents = [];
};

export function Bagel(id) {
    this.ID = id
};

export const addToBasket = (toAdd, addTo) => {
    addTo.contents.push(toAdd);
    console.log(addTo.contents);
    return addTo;
}