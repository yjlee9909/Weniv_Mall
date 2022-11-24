import { useEffect, useState } from "react";
import { getProductData } from "../../api/api";
import Product from "../Product/Product";
import { ProductListWrapper } from "./styled";

const ProductList = () => {
    const [productData, setProductData] = useState([]);
    // 한 번만 api 불러오기
    useEffect(() => {
        getProductData().then((data) => {
            setProductData(data);
        });
    }, []);
    //   console.log(productData);

    // click function - 하나로 사용하기 위해 (밖에서 선언)
    const onClickLikeBtn = (setState) => {
        setState((prev) => !prev);
    };

    return (
        <ProductListWrapper>
            {productData.map((item) => (
                <Product key={item.id} data={item} onClickLikeBtn={onClickLikeBtn} />
            ))}
        </ProductListWrapper>
    );
};
export default ProductList;
