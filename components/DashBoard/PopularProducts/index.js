import ProductItem from "../ProductItem";

export default function PopularProducts({ products }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow mb-2">
      <div className="flex flex-wrap justify-between items-center mb-7 gap-x-4 gap-y-3">

        <div className="flex items-center">
          <div className="w-4 h-8 rounded bg-[#B1E5FC] mr-3"></div>
          <h1 className="text-2xl font-semibold text-[#1A1D1F]">Popular Products</h1>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4 pb-6 font-semibold text-[#6F767E]" >
        <div>Products</div>
        <div>Earning</div>

      </div>
      {products.map((prod, idx) => (
        <ProductItem key={idx} product={prod} />
      ))}
      <div>
        <button className="w-full mt-4 text-black outline-1 outline-[#9b9c9d] font-bold px-4 py-2 rounded-md  hover:outline-2 hover:outline-black transition-colors">
          All Products
        </button>
      </div>
    </div>
  );
}