export default function ProductItem({ product }) {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center gap-3">
        <img src={product.image} className="w-12 h-12 rounded" alt={product.name} />
        <div>
          <p className="text-sm font-medium">{product.name}</p>
          <p className="text-xs text-gray-400">{product.subtitle}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold">${product.earning}</p>
      </div>
    </div>
  );
}
