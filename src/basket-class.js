class Basket {
    #basketContents = [];

    getBasketContents = () => this.#basketContents;

    addItem = (item) => {
        this.#basketContents.push(item);
    }

}

export default Basket;