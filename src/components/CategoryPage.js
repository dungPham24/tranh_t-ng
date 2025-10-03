import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { UpCircleOutlined } from '@ant-design/icons';
import {Tooltip} from "antd";

// Fake 100+ sản phẩm
const generateProducts = (count = 100) => {
    const images = [
        'https://res.cloudinary.com/dyv1qwqlx/image/upload/v1758096869/samples/animals/three-dogs.jpg',
        'https://res.cloudinary.com/dyv1qwqlx/image/upload/v1758096867/samples/animals/cat.jpg',
        'https://res.cloudinary.com/dyv1qwqlx/image/upload/v1758096869/samples/bike.jpg',
        'https://res.cloudinary.com/dyv1qwqlx/image/upload/v1758096867/samples/ecommerce/analog-classic.jpg',
        'https://res.cloudinary.com/dyv1qwqlx/image/upload/v1758096868/samples/landscapes/girl-urban-view.jpg',
        'https://res.cloudinary.com/dyv1qwqlx/image/upload/v1758096866/samples/animals/kitten.jpg',
    ];

    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        name: `Sản phẩm ${i + 1}`,
        image: images[i % images.length],
    }));
};

const allProducts = generateProducts(100);
const perPage = 12;

const CategoryPage = () => {
    const categoryName = "Danh mục ví dụ"; // tạm thời
    const [items, setItems] = useState(allProducts.slice(0, perPage));
    const [loading, setLoading] = useState(false);
    const [showTopBtn, setShowTopBtn] = useState(false);

    const fetchMoreData = () => {
        setLoading(true);
        setTimeout(() => {
            const nextItems = allProducts.slice(items.length, items.length + perPage);
            setItems(prev => [...prev, ...nextItems]);
            setLoading(false);
        }, 700);
    };

    // Back to Top button logic
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Skeleton custom
    const renderSkeleton = () => {
        return Array.from({ length: perPage }).map((_, idx) => (
            <div
                key={idx}
                className="overflow-hidden rounded-lg shadow-md animate-pulse bg-gray-200 h-56"
            ></div>
        ));
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col relative">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow">
                <h1 className="text-3xl font-bold mb-6">{categoryName}</h1>

                <InfiniteScroll
                    dataLength={items.length}
                    next={fetchMoreData}
                    hasMore={items.length < allProducts.length}
                    loader={
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-4">
                            {renderSkeleton()}
                        </div>
                    }
                >
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {items.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </InfiniteScroll>
            </div>

            <Footer />

            {showTopBtn && (
                <Tooltip title="Lên đầu trang" placement="left">
                    <div
                        onClick={scrollToTop}
                        className="fixed bottom-6 right-6 p-2 rounded-full shadow-lg bg-orange-500 text-white text-3xl flex items-center justify-center cursor-pointer
                 hover:bg-orange-600 transition-colors duration-300 transform hover:scale-110 z-50"
                    >
                        <UpCircleOutlined />
                    </div>
                </Tooltip>
            )}
        </div>
    );
};

export default CategoryPage;
