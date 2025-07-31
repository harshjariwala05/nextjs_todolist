export default function ProductItem({ product }) {
  return (

    <div className="flex items-center justify-between py-3">
      <div>
        <img src={product.image} className="w-12 h-12 rounded" alt={product.name} />
      </div>
      <div className="text-left flex-1 ml-4">
        <p className="text-sm font-medium">{product.name}</p>
        <p className="text-xs text-gray-400">{product.subtitle}</p>
      </div>

      <div className="text-right">
        <p className="font-semibold">${product.earning}</p>
      </div>
    </div>
  );
}
