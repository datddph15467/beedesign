const fotterPage = {
    render() {
        return /*html*/ `
        <div>
        <div class="max-w-[1140px] m-auto h-[35px] 
        after:contents-[attr(after)] after:absolute after:inset-x-0 after:h-[0.5px] after:bg-gray-200">
            <div class="relative flex justify-between items-center leading-[45px] 
            ">
                <p class="m-0">Hướng dẫn sử dụng</p>
                <p class="m-0">Giới thiệu</p>
                <p class="m-0">Hồ sơ năng lực</p>
                <p class="m-0">Khuyến mãi</p>
                <p class="m-0">Liên hệ</p>
            </div>
        </div>
        <div class="max-w-[1140px] m-auto flex justify-between">
            <div class="mt-10 font-roboto">
                <p class="font-bold">Bee Design</p>
                <p>Số điện thoại: 0971729599</p>
                <p>Địa chỉ: Hòa Phú, Ứng Hòa, Hà Nội</p>
                <p>Văn Phòng: Phan Chu Trinh, Hà Đông, Hà Nội</p>
                <p class="font-bold">Chính sách và điều khoản sử dụng</p>
                <img src="https://onter.vn/wp-content/themes/oceanwp/assets/images/bocongthuong.png" alt="">
            </div>
            <div class="mt-10 font-roboto">

                <div class="">
                    <p class="font-bold">
                        Liên hệ Bee Design
                    </p>
                    <div class="flex">
                        <img class="w-[45px] " src="./images/phone.svg" alt="">
                        <div class="">
                            <p class="mb-0 mx-2 text-gray-700 text-xl">0971729599</p>
                            <p class="mb-0 mx-2 text-gray-700  text-xl">0971729599</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mt-2">
                        <a href="" class="flex no-underline border-2 p-[3px] hover:underline">
                            <img class="w-[45px]" src="https://onter.vn/wp-content/themes/oceanwp/assets/svg/zalo.svg" alt="">
                            <div class="text-black mx-2">
                                <span>Chat</span>
                                <span class="block text-blue-500 font-bold">Zalo</span>
                            </div>
                        </a>
                    </div>
                    <div class="mt-2">
                        <a href="" class="flex no-underline  hover:underline border-2 p-[3px]">
                            <img class="w-[38px] h-[38px] mt-1" src="./images/messenger.png" alt="">
                            <div class="text-black mx-2">
                                <span>Chat</span>
                                <span class="block text-blue-500 font-bold">Messenger</span>
                            </div>
                        </a>
                    </div>
                    <div class="mt-2">
                        <p>Email:support@beedesign.com</p>
                    </div>
                </div>


            </div>
        </div>
    </div>
        `
    }
}
export default fotterPage;;