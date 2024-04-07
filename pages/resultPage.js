export class ResultPage{
    constructor(page){
        this.page = page;
        this.cards = page.locator(".product-card").all()
        this.priceText = card.locator(".product-card__price-current");
        this.buyButton = card.locator(".buy-link");
    }    

    async getPriceForItem(index){
        const price = await this.cards.nth(index).locator(".product-card__price-current").textContent()
        return price.trim();
    }

    async addItemToCart(index){
        await this.cards.nth(index).locator(".buy-link").click();
    }
}