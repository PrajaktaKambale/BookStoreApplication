import React, { useState, useEffect } from "react";
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

function FreeBook() {
  //get data from backend
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get("http://localhost:4001/book");
        console.log("response", response.data);
        setBook(response.data.filter((data) => data.Category === "Free"));
      } catch (error) {
        console.log("Error fetching book data", error);
      }
    };
    getBook();
  }, []);

  // const filteredData = book.filter((item) => {
  //   console.log("filter", item.Category === "Free");
  //   return item.Category === "Free";
  // });

  // console.log("filteredData", filteredData);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 gap-4">
        <div>
          {" "}
          <h1 className="font-semibold text-xl pb-2">free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            accusamus impedit ipsa iure corrupti illum alias eaque saepe vitae
            nemo!
          </p>
        </div>
        <Slider {...settings}>
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default FreeBook;
