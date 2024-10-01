import React, { useEffect, useState } from "react";
import { fetchRatings } from "../../services/getRatings";

export const Ratings = ({ query }) => {
  const [ratings, setRatings] = useState([]);
  useEffect(() => {
    const fetchRatingData = async () => {
      const ratingData = await fetchRatings;
    };
  }, []);
  return <div>Ratings</div>;
};
