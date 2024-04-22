const basket = {
    #basketContents: [],
    addItem(item) {
        if (item !== null) {
        this.#basketContents.push(item) 
        }
    }
}

export default basket;