import React, { useEffect, useState } from "react";
import axios from "axios";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/reviews");
        setReviews(response.data);
      } catch (error) {
        console.error("Ошибка при получении отзывов:", error);
      }
    };
    fetchReviews();
  }, []);

  const addReview = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/reviews", {
        name,
        text,
        rating,
      });
      setReviews([...reviews, response.data]);
      setName("");
      setText("");
      setRating(1);
    } catch (error) {
      console.error("Ошибка при добавлении отзыва:", error);
    }
  };

  return (
    <div>
      <h1>Отзывы</h1>
      <input
        type="text"
        placeholder="Ваше имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Добавьте отзыв"
      />
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        {[1, 2, 3, 4, 5].map((star) => (
          <option key={star} value={star}>
            {star} звезда{star > 1 ? "s" : ""}
          </option>
        ))}
      </select>
      <button onClick={addReview}>Добавить отзыв</button>
      <div>
        {reviews.map((review) => (
          <div key={review._id}>
            <strong>{review.name}</strong>: {review.text} (Рейтинг:{" "}
            {review.rating})
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
