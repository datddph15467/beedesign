import axios from "axios";
import { add, get, update } from "./../../../api/product";

const AdminEditPost = {
    async render(id) {
        const { data } = await get(id);
        console.log(data);
        return /* html */ `
        <div class="min-h-full">
            
            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="lg:flex lg:items-center lg:justify-between">
                <div class="flex-1 min-w-0">
                    <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                    Cập nhật bài viết
                    </h2>
                </div>
                <div class="mt-5 flex lg:mt-0 lg:ml-4">
                    <a href="/admin/products" class="sm:ml-3">
                    <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Quay lại
                    </button>
                    </a>
                </div>
                </div>
        
            </div>
            </header>
            <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <!-- Replace with your content -->
                <form action="" id="form-edit">
                    <input type="text" 
                        class="border border-black" 
                        placeholder="title post"
                        id="title-post"
                        value="${data.title}"
                        > <br />
                        <div class="grid grid-cols-2 gap-8">
                        <div>
                          <input type="file" 
                          class="border border-black" 
                          id="img-post"
                          > 
                        </div>
                        <div>
                          <img src="${data.img}" id="imgPreview" />
                        </div>
                      </div>
                    <textarea name="" 
                            id="desc-post" 
                            cols="30" 
                            rows="10"
                            class="border border-black"
                            value="${data.desc}"
                            ></textarea><br />
                    <button class="bg-blue-500 p-4 text-white">Cập nhật bài viết</button>
                </form>
                <!-- /End replace -->
            </div>
            </main>
        </div>
        `;
    },
    afterRender(id) {
        const formEdit = document.querySelector('#form-edit');
        formEdit.addEventListener('submit', (e) => {
            e.preventDefault();
            update({
                    id: id,
                    "title": document.querySelector('#title-post').value,
                    "img": document.querySelector('#img-post').value,
                    "desc": document.querySelector('#desc-post').value
                })
                // axios.post('https://5e79b4b817314d00161333da.mockapi.io/posts', postFake)
        })
    }
};
export default AdminEditPost;