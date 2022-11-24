import { useState } from "react";
import { ProductWrapper } from "./styled";
import HeartIcon from "../../asset/images/icon-heart.svg";
import HeartOnIcon from "../../asset/images/icon-heart-on.svg";
import { useNavigate } from "react-router-dom";

const Product = ({ data, onClickLikeBtn }) => {
    //   console.log(data);
    // 구조분해 할당하여 편하게 사용
    const { thumbnailImg, price, productName, discountRate, id } = data;
    const navigate = useNavigate();
    const [isLike, setIsLike] = useState(false);
    // console.log(data);

    const onClickHandler = () => {
        navigate(`/product/${id}`, {
            state: {
                data: {
                    ...data,
                },
            },
        });
    };

    return (
        <ProductWrapper onClick={onClickHandler}>
            <img src={`https://test.api.weniv.co.kr/${thumbnailImg}`} alt="" />
            <p className="product-title">{productName}</p>
            <button
                className="like-btn"
                onClick={(event) => {
                    onClickLikeBtn(setIsLike);
                    event.stopPropagation();
                    // 하트버튼 눌러도 페이지 넘어가는거 막기
                }}
            >
                <img src={isLike ? HeartOnIcon : HeartIcon} alt="좋아요 아이콘" />
            </button>
            <p>
                <strong>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong>원{/* 0이면 할인가 출력안함 */}
                {!!discountRate && (
                    <>
                        <span className="discount">{price} 원</span>
                        <span className="percent">{discountRate} %</span>
                    </>
                )}
            </p>
        </ProductWrapper>
    );
};
export default Product;
