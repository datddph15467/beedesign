import bannerPage from "../components/banner";
import menuPage from "../components/menu";

const blogPage = {
    render() {
        return /* html */ `
        <div class="w-full overflow-hidden">
        <div class="menu" >
            ${menuPage.render()}
        </div>
        <div class="banner" >
            ${bannerPage.render()}
        </div>
        
        </div>
        `;
    }
}

export default blogPage;