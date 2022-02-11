import bannerPage from "../components/banner";
import danhmucPage from "../components/danhmuc";
import menuPage from "../components/menu";
import priceProduct from "../components/price";
const HomePage = {
    render() {
        return /* html */ `
        <div class="w-full overflow-hidden">
        <div class="menu" >
            ${menuPage.render()}
        </div>
        <div class="banner" >
            ${bannerPage.render()}
        </div>
        <div class="banner" >
            ${danhmucPage.render()}
        </div>
        <div class="priceProduct" >
            ${priceProduct.render()}
        </div>
        </div>
        `;
    }
}

export default HomePage;