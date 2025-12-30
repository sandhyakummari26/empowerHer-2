function ProductList({ products, onProductSelect }) {
  console.log("ProductList rendered");

  return (
    <div>
      <h3>Products</h3>
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => onProductSelect(product)}
          style={{ cursor: "pointer", marginBottom: "8px" }}
        >
          {product.name} - ₹{product.price}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
