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
  return (
    <ProductListWrapper>
      {productData.map((item) => (
        <Product key={item.id} data={item} />
      ))}
    </ProductListWrapper>
  );
};
export default ProductList;
