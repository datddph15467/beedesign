import { signin } from "./../api/user";
import { signup } from "./../api/user";
const SignIn = {
    signIn() {
        window.onload = this.afterRender();
        return this.render();
    },

    render() {

        return /*html*/ `

        <button id="btnSignIn" class="relative font-bold text-black no-underline hover:after:left-0 hover:after:right-0 after:contents-[attr(after)] after:absolute after:inset-x-0 after:left-1/2 after:transition-all after:ease-linear after:right-1/2
        after:h-1 after:-bottom-2
        after:bg-orange-300">Đăng ký / Đăng nhập</button>
        <div class="SignIn">
        <div id="login" class="fixed top-0 left-0 h-full w-full bg-opacity-50 bg-black z-50 hidden" >
        <div id="js-model" class="w-[500px] top-32 relative py-10 px-5 bg-white m-auto transition animate-wiggle font-roboto">
        <div>
        <div class="font-semibold text-black no-underline text-3xl uppercase font-icon flex justify-center items-center">
        <img src="./../../favicon.png" class="w-[30%]" alt="">
        <div>
        <span class="text-orange-500">Bee </span>Design</a>
        </div>
        </div>
        </div>
        <div id="exit">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x absolute top-2 right-2" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
        </div>
        <form id="formSignin" action="">
                <label for=""  class="mt-1">Tên đăng nhập</label>
            <div class="mt-1">
                <input class="w-full h-9 border-2 outline-none p-2 rounded-2xl" type="text" name="" id="username" placeholder="Enter Username">
            </div>
                <label for=""  class="mt-1">Mật khẩu</label>
            <div class="mt-1">
                <input  class="w-full h-9 border-2 outline-none p-2 rounded-2xl" type="text" name="" id="password" placeholder="Enter Password">
            </div>
            <div class="flex justify-center mt-3">
             <button class="border-2 rounded-2xl w-[200px] text-center p-1 hover:bg-orange-400 hover:text-white" name="" id="">Đăng nhập</button>
            </div>
            <label for="" class="mt-4 block">Forgot password ? <a href="">Click Here</a> </label>
            <label for="" class="mt-1">Don't have an account ?<span class="cursor-pointer text-blue-600 underline  underline-offset-1" id="linkCeateAccount">Sign up</span> </label>
        </form>
        
        <form id="formSignup" action="" class="hidden">
                <label for=""  class="mt-1">Tên đăng nhập</label>
            <div class="mt-1">
                <input class="w-full h-9 border-2 outline-none p-2 rounded-2xl" type="text" name="" id="username-signup" placeholder="Enter Username">
            </div>
            <label for=""  class="mt-1">Email</label>
            <div class="mt-1">
                <input class="w-full h-9 border-2 outline-none p-2 rounded-2xl" type="email" name="" id="email-signup" placeholder="Enter Email">
            </div>
                <label for=""  class="mt-1">Mật khẩu</label>
            <div class="mt-1">
                <input  class="w-full h-9 border-2 outline-none p-2 rounded-2xl" type="text" name="" id="password-signup" placeholder="Enter Password">
            </div>
            <label for=""  class="mt-1">Nhập lại Mật khẩu</label>
            <div class="mt-1">
                <input  class="w-full h-9 border-2 outline-none p-2 rounded-2xl" type="text" name="" id="repassword-signup" placeholder="Enter Repassword">
            </div>
            <div class="flex justify-center mt-3">
            <button class="border-2 rounded-2xl w-[200px] text-center p-1 hover:bg-orange-400 hover:text-white" name="" id="">Đăng ký</button>
            </div>
            <label for="" class="mt-1">I have a account !<span class="cursor-pointer text-blue-600 underline  underline-offset-1" id="linkSignIn">Sign In</span> </label>
        </form>
        </div>

</div>

    </div>
        `
    },
    afterRender() {
        setTimeout(() => {
            const exit = document.querySelector('#exit');
            const btnSignIn = document.getElementById('btnSignIn');
            const model = document.querySelector('#login');
            const modeljs = document.querySelector('#js-model');
            const linkSignIn = document.querySelector('#linkSignIn');
            const linkCeateAccount = document.querySelector('#linkCeateAccount');
            const formSignin = document.querySelector('#formSignin');
            const formSignup = document.querySelector('#formSignup');


            exit.addEventListener('click', () => {
                model.classList.toggle('hidden')
            })

            function toggleModal() {
                model.classList.toggle('hidden')
            }
            btnSignIn.addEventListener('click', toggleModal);
            model.addEventListener('click', toggleModal);
            modeljs.addEventListener('click', function(event) {
                event.stopPropagation()
            })



            linkCeateAccount.addEventListener('click', function(e) {
                e.preventDefault();
                formSignin.classList.toggle('hidden')
                formSignup.classList.toggle('hidden')
            })
            linkSignIn.addEventListener('click', function(e) {
                e.preventDefault();
                formSignin.classList.toggle('hidden')
                formSignup.classList.toggle('hidden')
            })




            formSignin.addEventListener('submit', async(e) => {
                e.preventDefault();
                try {
                    const data = await signin({
                        username: document.querySelector('#username').value,
                        password: document.querySelector('#password').value
                    });
                    console.log(data);
                } catch (error) {
                    console.log(error);
                }

            })
            formSignup.addEventListener('submit', async(e) => {
                e.preventDefault();
                try {
                    const data = await signup({
                        username: document.querySelector('#username-signup').value,
                        email: document.querySelector('#email-signup').value,
                        password: document.querySelector('#password-signup').value
                    });
                    console.log(data);
                } catch (error) {
                    console.log(error);
                }

            })
        }, 1)

    }


}
export default SignIn;