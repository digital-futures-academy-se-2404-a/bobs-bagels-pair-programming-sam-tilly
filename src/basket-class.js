class Basket {
    #basketContents = [];

    getBasketContents = () => {
        return this.#basketContents;
    }

    addItem = (item) => {
        this.#basketContents.push(item);
    }

}

export default Basket;