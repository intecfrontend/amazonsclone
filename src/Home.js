import React from "react";
import HeroImg from "./imgs/hero.png";
import Product from "./Product";
import Javabook from "./imgs/javabook.jpg";
import Speaker from "./imgs/speaker.jpg";
import Ipad from "./imgs/Ipad.jpg";
import Laptop from "./imgs/macbookpro.jpg";
import Watch from "./imgs/watch.jpg";
import TV from "./imgs/samsungTV.jpg";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <img className="home__heroimg" src={HeroImg} alt="hero" />

      {/* Product props: is, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="123456789"
          title="The java book"
          price={11.96}
          rating={5}
          image={Javabook}
        />
        <Product
          id="123456788"
          title="Smart Speaker"
          price={11.96}
          rating={4}
          image={Speaker}
        />
        <Product
          id="123456787"
          title="Digital Watch"
          price={105.08}
          rating={2}
          image={Watch}
        />
        <Product
          id="123456786"
          title="Laptop Macbook Pro"
          price={1451.05}
          rating={4}
          image={Laptop}
          imgSize="large"
        />
        <Product
          id="123456785"
          title="Ipad Air"
          price={801.96}
          rating={3}
          image={Ipad}
        />{" "}
        <Product
          id="123456780"
          title="Samsung TV"
          price={1051.05}
          rating={5}
          image={TV}
        />


        <Product
      id= "123456780"
      title= "Samsung TV"
      price= {1051.05}
      rating= {5}
      image= {TV}
      />
      </div>
    </div>
  );
}

export default Home;
