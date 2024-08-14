import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
  //get data from backend
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get("http://localhost:4001/book");
        console.log("response", response.data);
        setBook(response.data);
      } catch (error) {
        console.log("Error fetching book data", error);
      }
    };
    getBook();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
          We're delighted to have you{" "}
          <span className="text-pink-500">Here!</span>
        </h1>

        <p className="mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
          reiciendis adipisci suscipit consequuntur quod obcaecati nobis
          voluptas eum, harum quae neque, nam nemo eaque provident temporibus
          excepturi sint tenetur. Minima iusto, enim delectus culpa doloribus
          rem iure asperiores amet ipsum.
        </p>
        <Link to="/">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">
            Back
          </button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {book.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Course;
