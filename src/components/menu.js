import SignIn from './signIn';
const menuPage = {
    render() {
        return /*html*/ `
            <div class="max-w-[100rem] mx-auto flex justify-content py-2">
                <div class="w-3/12">
                    <a class="font-semibold text-black no-underline text-3xl uppercase font-icon" href=""><img class="w-20 inline" src="./favicon.png" alt=""><span class="text-orange-500">Bee </span>Design</a>
                </div>
                <div class="m-auto w-full h-0 flex justify-end">
                    <ul class="flex justify-end font-bold text-lg items-center">
                        <li class="py-2 px-3 text-black">
                            <a
                            after="" class="relative text-black no-underline hover:after:left-0 hover:after:right-0 after:contents-[attr(after)] after:absolute after:inset-x-0 after:left-1/2 after:transition-all after:ease-linear after:right-1/2
                            after:h-1 after:-bottom-2
                            after:bg-orange-300
                        </li>
                        <li class="py-2 px-3 text-black">
                            <a after="" class="relative text-black no-underline hover:after:left-0 hover:after:right-0 after:contents-[attr(after)] after:absolute after:inset-x-0 after:left-1/2 after:transition-all after:ease-linear after:right-1/2
                            after:h-1 after:-bottom-2
                            after:bg-orange-300
                            " href="">Kho giao diện</a>
                        </li>
                        <li class="py-2 px-3 text-black">
                            <a after="" class="relative text-black no-underline hover:after:left-0 hover:after:right-0 after:contents-[attr(after)] after:absolute after:inset-x-0 after:left-1/2 after:transition-all after:ease-linear after:right-1/2
                            after:h-1 after:-bottom-2
                            after:bg-orange-300
                            " href="">Dịch vụ</a>
                        </li>
                        <li class="py-2 px-3 text-black">
                            <a after="" class="relative text-black no-underline hover:after:left-0 hover:after:right-0 after:contents-[attr(after)] after:absolute after:inset-x-0 after:left-1/2 after:transition-all after:ease-linear after:right-1/2
                            after:h-1 after:-bottom-2
                            after:bg-orange-300
                            " href="">Blog</a>
                        </li>
                        <li class="py-2 px-3 text-black">
                            ${SignIn.signIn()}
                        </li>
                        <li class=" px-5 text-black">
                        <button class="bg-orange-400 px-7 py-3 rounded-3xl hover:bg-orange-500 font-roboto"><span class="text-white">Đăng ký thiết kế</span></button>
                        </li>
                    </ul>
                </div>
            </div>
            
        `
    },

}

export default menuPage;