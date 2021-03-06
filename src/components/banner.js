const bannerPage = {
    render() {
        return /*html*/ `
        <div class="w-full bg-center mx-auto bg-banner h-auto bg-cover 2xl:max-w-[200rem]">
        <div class="flex justify-center">

            <div class="w-9/12 flex justify-between items-center py-52">
                <div class="relavtive">
                    <div class="">
                        <div class="">
                            <h1 class="font-semibold font-roboto my-4 text-5xl">Dịch vụ thiết kế banner </h1>
                            <p class="font-roboto text-2xl my-2">Gian hàng đẹp mắt  </p>
                            <p class="font-roboto text-2xl my-2">Thiết kế chuẩn SEO</p>
                        </div>
                        <div class="my-14">
                        <div class="my-8 absolute">
                            <a href="" class="bg-orange-400 no-underline font-roboto px-36 py-4 rounded-3xl uppercase active:bg-orange-600 text-white text-xl font-semibold hover:bg-orange-500">
                                Đăng ký thiết kế
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    },
}
export default bannerPage;