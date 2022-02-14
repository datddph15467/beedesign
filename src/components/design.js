const designPage = {
    render() {
        return /*html*/ `
        <div class="max-w-[100rem] mx-auto text-center w-7/12 font-roboto">
        <div>
            <h1 class="font-semibold text-3xl">Bạn muốn thiết kế riêng ?</h1>
        </div>
        <div class="mt-3">
            <p>
                Hãy giới thiệu đôi điều về nhu cầu của bạn
            </p>
            <p>
                Chúng tôi sẽ tư vấn và báo giá chi phí phù hợp nhất với bạn
            </p>
        </div>
        <div class="mt-3">
            <form action="">
                <div class="grid grid-cols-2 w-[100%] justify-center gap-5 ">
                    <div>
                        <div>
                            <input class="w-[100%] border-2 pl-3 py-2 outline-none" type="text" name="" id="" placeholder="Họ Và Tên">
                        </div>
                        <div>
                            <input class="w-[100%] border-2 pl-3 py-2 mt-3 outline-none" type="text" name="" id="" placeholder="Số điện thoại">
                        </div>
                    </div>
                    <div>
                        <textarea class="w-[100%] h-[100px] border-2 pl-2 py-2 outline-none" name="" id="" placeholder="Mô tả yêu cầu"></textarea>
                    </div>
                </div>
                <div class=" flex justify-end">
                    <button class="bg-orange-400 text-white mt-3 rounded-3xl w-28 h-9 hover:bg-orange-500 hover:text-white transition">Gửi yêu cầu</button>
                </div>

            </form>
        </div>

    </div>
        `
    }
}
export default designPage;