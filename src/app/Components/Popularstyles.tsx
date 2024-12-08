export default function PopularStyles() {
    const styles = [
      { id: 1, imgSrc: "/images/orange-chair.png", main: true }, 
      { id: 2, imgSrc: "/images/grey-chair.png" },               
      { id: 3, imgSrc: "/images/white-chair.png" },
      { id: 4, imgSrc: "/images/modern-chair.png" },
      { id: 5, imgSrc: "/images/classic-chair.png" },
    ];
  
    return (
      <div className="popular-styles">
        <div className="styles-header">
          <h2>Explore New and Popular Styles</h2>
        </div>
        <div className="styles-grid">
          {styles.map((style) => (
            <div
              key={style.id}
              className={`style-card ${style.main ? "large" : ""}`}
            >
              <img src={style.imgSrc} alt={`Style ${style.id}`} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  