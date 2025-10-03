import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';

const products = [
    { id: 1, name: 'Tranh phong cảnh', image: 'https://res.cloudinary.com/dyv1qwqlx/image/upload/v1758096869/samples/animals/three-dogs.jpg', category: 'Tranh treo tường' },
    { id: 2, name: 'Đồng hồ treo tường', image: 'https://res.cloudinary.com/dyv1qwqlx/image/upload/v1758096869/samples/bike.jpg', category: 'Đồng hồ' },
    { id: 3, name: 'Gương trang trí', image: 'https://res.cloudinary.com/dyv1qwqlx/image/upload/v1758096868/samples/landscapes/girl-urban-view.jpg', category: 'Gương trang trí' },
    { id: 4, name: 'Tranh hiện đại', image: 'https://res.cloudinary.com/dyv1qwqlx/image/upload/v1758096867/samples/animals/cat.jpg', category: 'Tranh treo tường' },
    { id: 5, name: 'Đồng hồ cổ điển', image: 'https://res.cloudinary.com/dyv1qwqlx/image/upload/v1758096867/samples/ecommerce/analog-classic.jpg', category: 'Đồng hồ' },
];

const Home = () => {
    const categories = [...new Set(products.map(p => p.category))];

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <Banner />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {categories.map(category => {
                    const productsInCategory = products.filter(p => p.category === category);

                    return (
                        <section key={category} className="my-12">
                            {/* Header category + Xem thêm */}
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 border-b-2 border-gray-300 inline-block pb-1 mb-2 sm:mb-0">
                                    {category}
                                </h2>
                                <Link to={`/category/${category}`} className="flex items-center text-orange-500 hover:text-orange-600 transition-colors">
                                    <span>Xem thêm</span>
                                    <ArrowRightOutlined className="ml-1" />
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                                {productsInCategory.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>

            <Footer />
        </div>
    );
};

export default Home;
