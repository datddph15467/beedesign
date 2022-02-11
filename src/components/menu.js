import SignIn from './signIn';
const menuPage = {
    render() {
        return /*html*/ `
            <div class="max-w-[100rem] mx-auto flex justify-content py-2">
                <div class="w-3/12">
                    <a class="font-semibold text-3xl uppercase font-icon" href=""><img class="w-20 inline" src="./favicon.png" alt=""><span class="text-orange-500">Bee </span>Design</a>
                </div>
                <div class="m-auto w-full flex justify-end items-center">
                    <ul class="flex justify-end font-bold text-lg">
                        <li class="py-2 px-5 text-black">
                            <a after="" class="relative hover:after:left-0 hover:after:right-0 after:contents-[attr(after)] after:absolute after:inset-x-0 after:left-1/2 after:transition-all after:ease-linear after:right-1/2
                            after:h-1 after:-bottom-2
                            after:bg-orange-300
                            " href="">Bảng giá</a>
                        </li>
                        <li class="py-2 px-5 text-black">
                            <a after="" class="relative hover:after:left-0 hover:after:right-0 after:contents-[attr(after)] after:absolute after:inset-x-0 after:left-1/2 after:transition-all after:ease-linear after:right-1/2
                            after:h-1 after:-bottom-2
                            after:bg-orange-300
                            " href="">Kho giao diện</a>
                        </li>
                        <li class="py-2 px-5 text-black">
                            <a after="" class="relative hover:after:left-0 hover:after:right-0 after:contents-[attr(after)] after:absolute after:inset-x-0 after:left-1/2 after:transition-all after:ease-linear after:right-1/2
                            after:h-1 after:-bottom-2
                            after:bg-orange-300
                            " href="">Dịch vụ</a>
                        </li>
                        <li class="py-2 px-5 text-black">
                            <a after="" class="relative hover:after:left-0 hover:after:right-0 after:contents-[attr(after)] after:absolute after:inset-x-0 after:left-1/2 after:transition-all after:ease-linear after:right-1/2
                            after:h-1 after:-bottom-2
                            after:bg-orange-300
                            " href="">Blog</a>
                        </li>
                        <li class="py-2 px-5 text-black">
                            <a after="" class="relative hover:after:left-0 hover:after:right-0 after:contents-[attr(after)] after:absolute after:inset-x-0 after:left-1/2 after:transition-all after:ease-linear after:right-1/2
                            after:h-1 after:-bottom-2
                            after:bg-orange-300
                            " href="">Đăng ký / Đăng nhập</a>
                        </li>
                        <li class=" px-5 text-black">
                            ${SignIn.render()}
                        </li>
                    </ul>
                </div>
            </div>
            
        `
    },

}

export default menuPage;