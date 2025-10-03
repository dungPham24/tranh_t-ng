import { Input, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Search } = Input;

const Navbar = () => (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <Link to="/" className="text-2xl font-bold text-gray-800">Tường Xinh</Link>
        {/*<div className="flex space-x-6">*/}
        {/*    <Link to="/products" className="hover:text-orange-500">Sản phẩm</Link>*/}
        {/*    <Link to="/about" className="hover:text-orange-500">Giới thiệu</Link>*/}
        {/*    <Link to="/contact" className="hover:text-orange-500">Liên hệ</Link>*/}
        {/*</div>*/}
        {/*<div className="flex items-center space-x-4">*/}
        {/*    <Search placeholder="Tìm kiếm..." style={{ width: 200 }} />*/}
        {/*    <Badge count={3}>*/}
        {/*        <ShoppingCartOutlined style={{ fontSize: '24px', color: '#333' }} />*/}
        {/*    </Badge>*/}
        {/*</div>*/}
    </nav>
);

export default Navbar;
