import Image from "next/image";
import style from "./product-card.module.css";

type ProductCardProps = {
    product: any;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="card">
      <div className="card-image">
        <Image src={product.image} alt={product.name} width={200} height={200} />
      </div>
      <div className="card-content">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <button>Accéder au cours</button>
      </div>
    </div>
  );
};

export default ProductCard;
