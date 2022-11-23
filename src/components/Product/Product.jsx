import { ProductWrapper } from "./styled";

const Product = ({ data }) => {
  //   console.log(data);
  // 구조분해 할당하여 편하게 사용
  const { thumbnailImg, price, productName, discountRate } = data;
  console.log(data);

  return (
    <ProductWrapper>
      <img src={`http://test.api.weniv.co.kr/${thumbnailImg}`} alt="" />
      <p className="product-title">{productName}</p>
      <p>
        <strong>{price}</strong>원{/* 0이면 할인가 출력안함 */}
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
