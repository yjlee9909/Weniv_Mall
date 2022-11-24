import { useEffect, useState } from "react";
import { ProductDetailWrapper } from "./styled";

const ProductDetail = ({ locationData }) => {
    // console.log(locationData);
    const [productData, setProductData] = useState();
    const [count, setCount] = useState(1);

    useEffect(() => {
        if (locationData) {
            setProductData(() => {
                return { ...locationData.state.data };
            });
        }
    }, []);
    // console.log(productData);

    const onClickCountHandler = (type) => {
        if (type === "increment") {
            if (productData.stockCount > count) {
                setCount((prev) => prev + 1);
            }
        } else {
            if (count > 1) {
                setCount((prev) => prev - 1);
            }
        }
    };

    return (
        <ProductDetailWrapper>
            <h2 className="hidden">상품정보페이지</h2>
            {productData && (
                <div className="detail-main">
                    <img src={`https://test.api.weniv.co.kr/${productData.thumbnailImg}`} alt="" />
                    <ul>
                        <li className="product-title">{productData.productName}</li>
                        <li className="product-price">
                            <strong>{productData.price.toLocaleString()}</strong> 원
                        </li>
                        <li className="delivery">택배배송 / {productData.shippingFee.toLocaleString()}원</li>
                        <li className="quantity">
                            <div className="quantity-btn-box">
                                <button
                                    onClick={() => {
                                        onClickCountHandler();
                                    }}
                                >
                                    -
                                </button>
                                <p>{count}</p>
                                <button
                                    onClick={() => {
                                        onClickCountHandler("increment");
                                    }}
                                >
                                    +
                                </button>
                            </div>
                        </li>
                        <li className="product-result-box">
                            <strong className="result-title">총 상품 금액</strong>
                            <span className="result-quantity">
                                총 수량<strong>{count}</strong>개
                            </span>
                            <span className="result-price">
                                <strong>{(productData.price * count).toLocaleString()}</strong>
                            </span>
                        </li>
                        <li className="product-btn-box"></li>
                    </ul>
                </div>
            )}
        </ProductDetailWrapper>
    );
};
export default ProductDetail;
