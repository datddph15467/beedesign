import Navigo from "navigo";
import HomePage from "./pages/home";
import notFoundPage from "./pages/Notfound";
import pricePage from "./pages/price";
const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#app").innerHTML = content;
}
router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/gia": () => {
        print(pricePage.render());
    },
    "/signin": () => print(Signin)
});
router.notFound(() => print(notFoundPage.render()));
router.resolve();