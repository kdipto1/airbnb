import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Cards = () => {
  const [places, setPlaces] = useState();
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);
  return (
    <section className="container mx-auto mt-5">
      <div className="flex flex-wrap ">
        {places?.map((place) => (
          <div key={place.id} className="card card-compact m-3 mx-auto hover:translate-x-1 hover:translate-y-1 hover:transition">
            <figure className="">
              <img
                style={{ width: "290.75px", height: "276.2px" }}
                src={place.image}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="mt-2 flex justify-between">
              <div>
                <h2 className="font-semibold">{place.name}</h2>
                <p>{place.distance}</p>
                <p>{place.date}</p>
                <p>
                  <span className="font-semibold">${place.price}</span> night
                </p>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clip-rule="evenodd"
                  />
                </svg>
                {place.star}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;