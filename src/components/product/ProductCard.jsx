import React from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { isWishlisted } from "../store/slices/wishlistSlice";

import "./Product.css";
import { FaArrowRight } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const wishlisted = useSelector((state) => isWishlisted(state, product));

  const goToDetails = () => {
    navigate(`/wishlisted/${wishlisted.id}`);
  };

  return (
    <div className="product-card">
      {wishlisted.isHit && <span className="tag hit-tag">ХИТ</span>}
      {wishlisted.isNew && <span className="tag new-tag">Новинка</span>}

      <div className="product-image-wrapper" onClick={goToDetails}>
        <img
          src={wishlisted.imageUrl}
          alt={wishlisted.name}
          className="product-image"
        />
      </div>

      <button className="details-btn" onClick={goToDetails}>
        Подробнее <FaArrowRight />
      </button>
    </div>
  );
};

export default ProductCard;









// import React from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa";

// import { isWishlisted } from "../store/slices/wishlistSlice";
// import "./Product.css";

// const ProductCard = ({ product }) => {
//   const navigate = useNavigate();

//   // Redux’dan wishlist holatini tekshiramiz
//   const wishlisted = useSelector((state) => isWishlisted(state, product));

//   const goToDetails = () => {
//     navigate(`/product/${wishlisted.id}`);
//   };

//   return (
//     <div className="product-card">
//       {/* Status teglari */}
//       {wishlisted.isHit && <span className="tag hit-tag">ХИТ</span>}
//       {wishlisted.isNew && <span className="tag new-tag">Новинка</span>}

//       {/* Product rasmi */}
//       <div className="product-image-wrapper" onClick={goToDetails}>
//         <img
//           src={wishlisted.imageUrl}
//           alt={wishlisted.name}
//           className="product-image"
//         />
//       </div>

//       {/* Product nomi va narxi */}
//       <div className="product-info">
//         <h3 className="product-name">{wishlisted.name}</h3>
//         <p className="product-price">{wishlisted.price} ₽</p>
//       </div>

//       {/* Batafsil tugmasi */}
//       <button className="details-btn" onClick={goToDetails}>
//         Подробнее <FaArrowRight className="arrow-icon" />
//       </button>
//     </div>
//   );
// };

// export default ProductCard;
