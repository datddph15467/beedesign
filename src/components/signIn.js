import { signin } from "./../api/user";

// const Signin = {
//     render() {
//         return /*html*/ `
//             <form id="formSignin">
//                 <input type="email" placeholder="email"  id="email"/>
//                 <input type="password" placeholder="password"  id="password"/>
//                 <button>Đăng nhập</button>
//             </form>
//         `
//     },
//     afterRender() {
//         const formSignin = document.querySelector('#formSignin');
//         formSignin.addEventListener('submit', async(e) => {
//             e.preventDefault();
//             try {
//                 const data = await signin({
//                     email: document.querySelector('#email').value,
//                     password: document.querySelector('#password').value
//                 });
//                 console.log(data);
//             } catch (error) {
//                 console.log(error);
//             }

//         })
//     }
// };
// export default Signin;
const SignIn = {
    render() {
        return /*html*/ `

        <button id="btnSignIn" class="bg-orange-400 px-7 py-3 rounded-3xl hover:bg-orange-500 font-roboto"><span class="text-white">Đăng ký thiết kế</span></button>
        <div id="login" class="fixed h-full w-full bg-opacity-50 bg-black z-50 hidden">
        <div class="w-56 relative bg-white m-auto">
            <div>
                <h1>Sign In</h1>
            </div>

            <form id="formSignin" action="">
                <label for="">Tên đăng nhập</label>
                <div>
                    <input type="text" name="" id="">
                </div>
                <label for="">Mật khẩu</label>
                <div>
                    <input type="text" name="" id="">
                </div>
                <div>
                    <input type="submit" value="Đăng nhập" name="" id="">
                </div>
            </form>
        </div>

    </div>
        `
    },
    afterRender() {
        const btnSignIn = document.getElementById('btnSignIn');
        const model = document.querySelector('#login');
        btnSignIn.addEventListener('click', () => {
            console.log('a');
        })

        function toggleModal() {
            model.classList.toggle('hidden')
        }
        btnSignIn.addEventListener('click', toggleModal);

        const formSignin = document.querySelector('#formSignin');
        formSignin.addEventListener('submit', async(e) => {
            e.preventDefault();
            try {
                const data = await signin({
                    email: document.querySelector('#email').value,
                    password: document.querySelector('#password').value
                });
                console.log(data);
            } catch (error) {
                console.log(error);
            }

        })

    }


}
export default SignIn;