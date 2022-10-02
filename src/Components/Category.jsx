import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Category = () => {
  const [category, setCategory] = useState();
  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  },[])
  return (
    <section className="container mx-auto pt-4 bg-white">
      <div className="flex flex-wrap">
        {category?.map((c) => (
          <div
            key={c.id}
            className="mx-auto m-2 hover:translate-x-1 hover:translate-y-1 transition"
          >
            <img
              className="mx-auto"
              style={{ width: "24px" }}
              src={c.image}
              alt=""
            />
            <p className="text-xs mt-2">{c.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
