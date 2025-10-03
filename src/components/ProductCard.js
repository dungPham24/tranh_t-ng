import { useState } from 'react';
import { Modal } from 'antd';

const ProductCard = ({ product }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => setIsModalVisible(true);
    const handleClose = () => setIsModalVisible(false);

    return (
        <>
            <div
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={showModal}
            >
                <img
                    src={product.image}
                    alt={product.name || 'Sản phẩm'}
                    className="w-full h-56 sm:h-64 md:h-72 lg:h-56 object-cover transition-transform duration-300 transform hover:scale-105"
                />
            </div>

            <Modal
                open={isModalVisible}
                onCancel={handleClose}
                footer={null} // không hiện button mặc định
                centered
                width="90%" // responsive: gần full width trên mobile
                style={{ maxWidth: 800 }} // desktop max 800px
                bodyStyle={{ padding: '1.5rem' }}
            >
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center sm:text-left">{product.name}</h2>
                {product.category && (
                    <p className="text-gray-700 mb-4 text-center sm:text-left">Danh mục: {product.category}</p>
                )}
                <div className="w-full flex justify-center">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full sm:w-auto max-h-[60vh] object-contain rounded"
                    />
                </div>
            </Modal>
        </>
    );
};

export default ProductCard;
