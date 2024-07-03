const Ribbon = () => {
    return (
        <div>
            <div className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center text-center text-white bg-cover bg-fixed rounded-xl px-6 py-16 bg-[linear-gradient(to_right,rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://weedman.com/Library/Upload/2023/05/18/ce2d4214-6885-4e36-87b2-4159417f137c/A_Sunday_on_La_Grande_Jatte,_Georges_Seurat,_1884.jpg')]">
                <div>
                    <img className="mx-auto mb-4 h-16" src="https://cdn-icons-png.flaticon.com/256/2970/2970785.png" alt="" />
                    <p>Upload your Painting to the website</p>
                </div>
                <div>
                <img className="mx-auto mb-4 h-16" src="https://cdn-icons-png.flaticon.com/512/5601/5601003.png" alt="" />
                    <p>Fill all details and the price you would like</p>
                </div>
                <div>
                <img className="mx-auto mb-4 h-16" src="https://cdn-icons-png.flaticon.com/512/223/223226.png" alt="" />
                    <p>Our expert artist will manually verify the authenticity of your painting</p>
                </div>
                <div>
                <img className="mx-auto mb-4 h-16" src="https://cdn-icons-png.flaticon.com/256/2387/2387536.png" alt="" />
                    <p>Congratulations. Your painting is up for sale</p>
                </div>
            </div>
        </div>
    );
};

export default Ribbon;