const beePage = {
    render() {
        return /*html*/ `
        <div class="max-w-[80rem] mx-auto text-center font-roboto mt-3">
        <div class="text-3xl ">
            <span class="font-bold">Bee Design</span> được đúc kết từ kinh nghiệm hơn 5 năm của hơn 5.000+ khách hàng,sẽ giúp bạn tiết kiệm thời gian và kinh doanh hiệu quả
        </div>
        <div class="flex gap-[3.5rem] justify-center mt-4">
            <div class="hover:scale-[1.1] transition">
                <div class="ml-1 w-[111px] h-[111px] rounded-full bg-red-100 relative flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="red" class="bi bi-journal-richtext " viewBox="0 0 16 16">
                        <path d="M7.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047L11 4.75V7a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 7v-.5s1.54-1.274 1.639-1.208zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                      </svg>
                </div>
                <div class="mt-3">
                    100.000+
                </div>
                <div>
                    Đơn hàng được tạo
                </div>
            </div>
            <div class="hover:scale-[1.1] transition">
                <div class="ml-5 w-[111px] h-[111px] rounded-full bg-green-100 relative flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="green" class="bi bi-journal-richtext " viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                      </svg>
                </div>
                <div class="mt-3">
                    5.000+
                </div>
                <div>
                    Khách hàng đã chọn lựa
                </div>
            </div>
            <div class="hover:scale-[1.1] transition">
                <div class="ml-4 w-[111px] h-[111px] rounded-full bg-orange-100 relative flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="orange" class="bi bi-journal-richtext " viewBox="0 0 16 16">
                        <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                             <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
                      </svg>
                </div>
                <div class="mt-3">
                    1.000+
                </div>
                <div>
                    Gian hàng được kết nối
                </div>
            </div>
        </div>
    </div>
        `
    }
}
export default beePage;