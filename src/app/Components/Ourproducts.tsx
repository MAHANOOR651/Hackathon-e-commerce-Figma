export default function OurProducts() {
    const Products = [
        { id: 1, imgSrc: "/images/chair1.png", label: "New", price: "$20", title: "Library Stool Chair", originalPrice: "" },
    { id: 2, imgSrc: "/images/chair2.png", label: "Sales", price: "$20", title: "Library Stool Chair", originalPrice: "$30" },
    { id: 3, imgSrc: "/images/chair3.png", price: "$20", title: "Library Stool Chair", originalPrice: "" },
    { id: 4, imgSrc: "/images/chair4.png", price: "$20", title: "Library Stool Chair", originalPrice: "" },
    { id: 5, imgSrc: "/images/chair5.png", label: "New", price: "$20", title: "Library Stool Chair", originalPrice: "" },
    { id: 6, imgSrc: "/images/chair6.png", label: "Sales", price: "$20", title: "Library Stool Chair", originalPrice: "$25" },
    { id: 7, imgSrc: "/images/chair7.png", price: "$20", title: "Library Stool Chair", originalPrice: "" },
    { id: 8, imgSrc: "/images/chair8.png", price: "$20", title: "Library Stool Chair", originalPrice: "" },
  ];
      return(
        <div className="our products">
            <h2>Our Products</h2>
            <div className="products-grid">
            {Products.map((Products) => (
          <div key={Products.id} className="product-card">
            <div className="product-image">
              <img src={Products.imgSrc} alt={Products.title} />
              {Products.label && <span className={`product-label ${Products.label.toLowerCase()}`}>{Products.label}</span>}
            </div>
       <div className="product-details">
        <h3>{Products.title}</h3>
        <div className="product-price">
            <span>{Products.price}</span>
            {Products.originalPrice && <span className="original-price">{Products.originalPrice}</span>}
        </div>
        </div>
        </div>
            ))}
       </div>
        </div>
      );
    
}