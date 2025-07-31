import ProductItem from "../ProductItem";

export default function PopularProducts({ products }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow">
      <h3 className="text-lg font-semibold mb-4">Popular products</h3>
      {products.map((prod, idx) => (
        <ProductItem key={idx} product={prod} />
      ))}
    </div>
  );
}
