import ProfileCourseCard from "./product-card";

type ProfileCourseCardsProps = {
  products: any[];
};

const ProductCards = ({ products }: ProfileCourseCardsProps) => {
  console.log(products);
  return (
    <section>
      <ul>
        {products.length > 0 && products.map((product: any) => (
          <li key={product.id}>
            <ProfileCourseCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductCards;
