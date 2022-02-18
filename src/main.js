import Navigo from "navigo";
import AdminAddNewsPage from "./pages/admin/product/add";
import AdminEditPost from "./pages/admin/product/edit";
import AdminNewsPage from "./pages/admin/product";
import HomePage from "./pages/home";
import notFoundPage from "./pages/Notfound";
import pricePage from "./pages/price";
import blogPage from "./pages/blog";
const router = new Navigo("/", { linksSelector: "a" });

const print = async(content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};

router.on({
    "/": () => {
        print(HomePage);
    },
    "/gia": () => {
        print(pricePage);
    },
    "/blog": () => {
        print(blogPage);
    },
    "/signin": () => print(Signin),

    "/admin/products": () => {
        print(AdminNewsPage);
    },
    "/admin/products/add": () => {
        print(AdminAddNewsPage);
    },
    "/admin/products/:id/edit": ({ data }) => {
        print(AdminEditPost, data.id);
    },

});
router.notFound(() => print(notFoundPage.render()));
router.resolve();