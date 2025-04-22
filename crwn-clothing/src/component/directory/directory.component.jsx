import { Route } from "react-router-dom";
import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.style.css";
import PerfumeSlider from "../slidershow/slidershow.component";
import SignupFooter from "../signup-footer/signup-footer.component";
const categories = [
  {
    id: 1,
    title: "Roja",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHgA3eMbM0XnOJjR3ZePYDmBN6wOnE_KwpYw&s",
    route: "shop/roja",
  },
  {
    id: 2,
    title: "Bond",
    imageUrl: "https://m.media-amazon.com/images/I/71-hiJmvMuL.jpg",
    route: "shop/bond",
  },
  {
    id: 3,
    title: "Creed",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJtiZu_9syYQtkKWg-knjFCt4T6lsH5a-5fQ&s",
    route: "shop/creed",
  },
  {
    id: 4,
    title: "Xerjoff",
    imageUrl:
      "https://scentira.in/cdn/shop/files/1_c996123b-9d15-476e-ab72-4b25209c500b.png?v=1715360486&width=1080",
    route: "shop/xerjoff",
  },
  {
    id: 5,
    title: "Kilian",
    imageUrl:
      "https://images-cdn.ubuy.co.in/667bf9ffcb910f3c7e01de2c-rolling-in-love-by-kilian-for-unisex.jpg",
    route: "shop/kilian",
  },
];

const perfumes = [
  {
    imageUrl:
      "https://faradays.store/wp-content/uploads/2021/10/Roja-Dove-Faradays.jpg",
    name: "Roja",
  },
  {
    imageUrl:
      "https://larose.az/images/news_images/12.jpg",
    name: "Creed",
  },
  {
    imageUrl:
      "https://i0.wp.com/travelradar.aero/wp-content/uploads/2025/01/Baccarar-Rouge.webp?fit=1980%2C1080&ssl=1",
    name: "MFT",
  },
];
const Directory = () => {
  return (
    <>
      <PerfumeSlider perfumes={perfumes} />

      <div className="directory-container">
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
        <br></br>
       
      </div>
      <SignupFooter />
    </>
  );
};

export default Directory;
