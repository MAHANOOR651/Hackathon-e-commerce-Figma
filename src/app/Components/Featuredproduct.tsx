export default function FeaturedProducts() {
    const products = [
      {
        id: 1,
        name: "Library Stool Chair",
        price: "$20",
        imgSrc: "/images/product1.png", // Replace with your image path
        label: "New",
      },
      {
        id: 2,
        name: "Library Stool Chair",
        price: "$20",
        imgSrc: "/images/product2.png", // Replace with your image path
        label: "Sales",
      },
      {
        id: 3,
        name: "Library Stool Chair",
        price: "$20",
        imgSrc: "/images/product3.png", // Replace with your image path
      },
      {
        id: 4,
        name: "Library Stool Chair",
        price: "$20",
        imgSrc: "/images/product4.png", // Replace with your image path
      },
    ];
  
    return (
      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                {product.label && <span className="label">{product.label}</span>}
                <img src={product.imgSrc} alt={product.name} />
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
              <div className="product-actions">
                <button className="cart-btn">🛒</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  