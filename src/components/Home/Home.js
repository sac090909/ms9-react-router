import React from "react";
import { useNavigate } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";
import "./Home.css";

const Home = () => {
  const [reviews, setReviews] = useReviews();
  const navigate = useNavigate();

  const handleShowAllReviews = () => {
    navigate("/reviews");
  };

  return (
    <div>
      <section className="home-section-des">
        <div className="home-des">
          <h1> The Best T-Shirt</h1>
          <h1> The next buy item</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vero
            labore, reiciendis exercitationem perspiciatis amet totam placeat
            mollitia porro fuga at quaerat voluptatum earum nisi! Fugit saepe
            repellat corrupti officia.
          </p>
        </div>
        <img src={process.env.PUBLIC_URL + "/tshirt.jpeg"} alt="" />
      </section>

      <section className="home-section-reviews">
        <h2> Product Top Reviews {reviews.slice(0, 3).length} </h2>

        {reviews.slice(0, 3).map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </section>

      <button onClick={handleShowAllReviews}>Show All Review</button>
    </div>
  );
};

export default Home;
