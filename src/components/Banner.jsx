
const Banner = () => {

    return (
        <div>
            <div className="carousel w-full h-[600px] mb-12">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://www.1st-art-gallery.com/media/magefan_blog/The-Last-Supper-Restored-Da-Vinci_32x16.jpg" className="w-full object-cover rounded-xl" />

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute w-7/12 top-[40%] left-[20%]">
                        <div className="flex text-center justify-center text-2xl lg:text-4xl bg-[#1a1a1a80] text-white font-bold px-6 lg:px-12 py-4 lg:py-8  rounded-xl">The Last Supper-Leonardo Da Vinci</div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://d16kd6gzalkogb.cloudfront.net/magazine_images/Vincent-van-Gogh-Whaet-Field-with-Cypresses.-Image-via-wikimedia.org_.jpg" className="w-full object-cover rounded-xl" />

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute w-7/12 top-[40%] left-[20%]">
                        <div className="flex text-center justify-center text-2xl lg:text-4xl bg-[#1a1a1a80] text-white font-bold px-6 lg:px-12 py-4 lg:py-8  rounded-xl">Wheat Field with Cypresses-Vincent Van Gogh</div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://artrkl.com/cdn/shop/articles/thecreationofadam-1690035964350_d2d6280f-ed1d-465e-ad42-0ea0bbbcefde.webp?v=1690563054" className="w-full object-cover rounded-xl" />

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute w-7/12 top-[40%] left-[20%]">
                        <div className="flex text-center justify-center text-2xl lg:text-4xl bg-[#1a1a1a80] text-white font-bold px-6 lg:px-12 py-4 lg:py-8  rounded-xl">The Creation of Adam-Michelangelo</div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://zet.gallery/blog/wp-content/uploads/2016/02/Vicent-Van-Gogh-Starry-Night-Famous-Oil-Paintings-www.shairart.com_.jpg" className="w-full object-cover rounded-xl" />

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute w-7/12 top-[40%] left-[20%]">
                        <div className="flex text-center justify-center text-2xl lg:text-4xl bg-[#1a1a1a80] text-white font-bold px-6 lg:px-12 py-4 lg:py-8  rounded-xl">Starry Night-Vincent Van Gogh</div>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src="https://d16kd6gzalkogb.cloudfront.net/magazine_images/Katsushika-Hokusai-The-Wave-courtesy-of-images.metmuseum.org_-1.jpg" className="w-full object-cover rounded-xl" />

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute w-7/12 top-[40%] left-[20%]">
                        <div className="flex text-center justify-center text-2xl lg:text-4xl bg-[#1a1a1a80] text-white font-bold px-6 lg:px-12 py-4 lg:py-8  rounded-xl">The Wave-Katsushika Hokusai</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;