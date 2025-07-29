import React from "react";
import { useParams, Link } from "react-router-dom";

const images = {
  kitchen: [
    "/assets/Kitchen/kitchen 1.jpg",
    "/assets/Kitchen/kitchen 2.jpg",
    "/assets/Kitchen/kitchen 3.jpg",
    "/assets/Kitchen/kitchen 4.jpg",
    "/assets/Kitchen/kitchen 5.jpg",
    "/assets/Kitchen/kitchen 6.jpg",
    "/assets/Kitchen/kitchen 7.jpg",
    "/assets/Kitchen/kitchen 8.jpg",
    "/assets/Kitchen/kitchen 9.jpg",
    "/assets/Kitchen/kitchen 10.jpg",
  ],
  'media-wall': [
    "/assets/Media Walls/media wall 1.jpg",
    "/assets/Media Walls/media wall 2.jpg",
    "/assets/Media Walls/media wall 3.jpg",
    "/assets/Media Walls/media wall 4.jpg",
    "/assets/Media Walls/media wall 5.jpg",
    "/assets/Media Walls/media wall 6.jpg",
    "/assets/Media Walls/media wall 7.jpg",
  ],
  wardrobe: [
    "/assets/Wardrobe/wardrobe 1.jpg",
    "/assets/Wardrobe/wardrobe 2.jpg",
    "/assets/Wardrobe/wardrobe 3.jpg",
    "/assets/Wardrobe/wardrobe 4.jpg",
    "/assets/Wardrobe/wardrobe 5.jpg",
    "/assets/Wardrobe/wardrobe 6.jpg",
  ],
  'study-table': [
    "/assets/Study Table/study table 1.jpg",
    "/assets/Study Table/study table 2.jpg",
    "/assets/Study Table/study table 3.jpg",
    "/assets/Study Table/study table 4.jpg",
  ],
};

const CategoryPage = () => {
  const { name } = useParams();
  const title = name.replace("-", " ");
  const categoryImages = images[name] || [];

  return (
    <section style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center" }}>{title.toUpperCase()}</h2>
      <div className="gallery">
        {categoryImages.map((src, idx) => (
          <img key={idx} src={src} alt={`${name}-${idx}`} />
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <Link to="/" style={{ color: "#0077cc", fontWeight: "bold" }}>
          ← Back to Home
        </Link>
      </div>
    </section>
  );
};

export default CategoryPage;
