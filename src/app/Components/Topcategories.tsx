export default function TopCategories(){
    const categories =[
        {
            id:1,
            name: "Wing Chair",
            products: "3,584 Products",
            imgSrc: "/images/wing-chair.png",
        },
        {
            id:2,
            name: "Wooden Chair",
            products: "157 Products",
            imgSrc: "/images/wooden-chair.png",
        },
        {
            id:2,
            name: "Desk Chair",
            products: "154 Products",
            imgSrc: "/images/desk-chair.png",
        },

        
    ];

    return(
        <div className="topcategories">
            <h2>Top Categories</h2>
            <div className="category-grid">
            {categories.map((category) => (
          <div className="category-card" key={category.id}>
            <div className="category-image">
              <img src={category.imgSrc} alt={category.name} />
            </div>
            <div className="category-details">
                <h3>{category.name}</h3>
                <p>{category.products}</p>
                </div>
                </div>
            ))}

            </div>
        </div>
    )
};