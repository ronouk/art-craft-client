const Footer = () => {
    return (
        <div id="footer" className="bg-[#1d1f1f] text-white">
            <footer className="w-11/12 mx-auto footer py-12 lg:py-24 text justify-center md:justify-between items-center">
                <aside className="flex flex-col font-bold text-yellow-700 items-center border p-4 rounded-lg">
                    <img src="/public/logo-craft-haven.png" width={96} alt="" />
                    <p className="uppercase text-white">Craft Haven</p>
                </aside>
                <nav className="flex flex-col w-full items-center lg:items-end">
                    <h6 className="footer-title">Categories</h6>
                    <a className="link link-hover">Landscape Painting</a>
                    <a className="link link-hover">Portrait Painting</a>
                    <a className="link link-hover">Oil Painting</a>
                    <a className="link link-hover">Watercolor Paining</a>
                </nav>
                <nav className="flex flex-col w-full items-center lg:items-end">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="flex flex-col w-full items-center lg:items-end">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                    <a className="link link-hover">GDPR Compliance</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;