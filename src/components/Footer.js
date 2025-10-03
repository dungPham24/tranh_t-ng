const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-200 pt-10 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                {/* Logo / Brand */}
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-2xl font-bold text-white mb-2">TuongXinh</h1>
                    <p className="text-gray-400">Trang trí không gian sống của bạn</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Liên kết nhanh</h3>
                    <ul className="space-y-1">
                        <li><a href="/" className="hover:text-orange-500 transition-colors">Trang chủ</a></li>
                        <li><a href="/products" className="hover:text-orange-500 transition-colors">Sản phẩm</a></li>
                        <li><a href="/about" className="hover:text-orange-500 transition-colors">Giới thiệu</a></li>
                        <li><a href="/contact" className="hover:text-orange-500 transition-colors">Liên hệ</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Liên hệ</h3>
                    <p className="text-gray-400">Email: info@tuongxinh.com.vn</p>
                    <p className="text-gray-400">Hotline: 0909 123 456</p>
                    <p className="text-gray-400">Địa chỉ: 123 Đường ABC, TP.HCM</p>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} TuongXinh. Bản quyền thuộc về TuongXinh.
            </div>
        </footer>
    );
};

export default Footer;
