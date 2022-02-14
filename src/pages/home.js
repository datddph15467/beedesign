import bannerPage from "../components/banner";
import beePage from "../components/bee";
import danhmucPage from "../components/danhmuc";
import designPage from "../components/design";
import infoPage from "../components/info";
import khogiaodienPage from "../components/khogiaodien";
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
        <div class="designPage" >
            ${designPage.render()}
        </div>
        <div class="infoPage" >
        ${infoPage.render()}
        </div>
        <div class="beePage" >
        ${beePage.render()}
        </div>
        <div class="khogiaodienPage bg-gradient1" >
        ${khogiaodienPage.render()}
        </div>
        </div>
        `;
    }
}

export default HomePage;