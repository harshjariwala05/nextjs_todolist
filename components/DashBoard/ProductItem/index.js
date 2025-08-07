export default function ProductItem({ product }) {
  return (
    <div className="flex items-center justify-between p-3">
      <div className="w-16 h-16 mr-3 overflow-hidden rounded-lg">
        <img src={product.image} className="w-full h-full object-cover " alt={product.name} />
      </div>
      <div className="flex-1 pr-4 transition-0.2s">
        <p className="text-sm font-medium">{product.name}</p>
        <p className="text-xs text-gray-400">{product.subtitle}</p>
      </div>

      <div className="text-right">
        <p className="font-semibold">${product.earning}</p>
      </div>
    </div>
  );
}