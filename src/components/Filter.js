import React, { useEffect } from "react";
import styled from "styled-components";

const Filter = ({ setActiveCategory, activeCategory, setFiltered, data }) => {
  useEffect(() => {
    if (activeCategory === "all") {
      setFiltered(data);
      return;
    }
    const filtered = data.filter((movie) =>
      movie.category.includes(activeCategory)
    );
    setFiltered(filtered);
  }, [activeCategory]);
  return (
    <FilterWrapper>
      <button
        className={activeCategory === "all" ? "active" : ""}
        onClick={() => setActiveCategory("all")}
      >
        All
      </button>
      <button
        className={activeCategory === "smartphones" ? "active" : ""}
        onClick={() => setActiveCategory("smartphones")}
      >
        Smart Phone
      </button>
      <button
        className={activeCategory === "laptops" ? "active" : ""}
        onClick={() => setActiveCategory("laptops")}
      >
        Laptop
      </button>
      <button
        className={activeCategory === "fragrances" ? "active" : ""}
        onClick={() => setActiveCategory("fragrances")}
      >
        Fragrances
      </button>
      <button
        className={activeCategory === "skincare" ? "active" : ""}
        onClick={() => setActiveCategory("skincare")}
      >
        Skin Care
      </button>
      <button
        className={activeCategory === "groceries" ? "active" : ""}
        onClick={() => setActiveCategory("groceries")}
      >
        Groceries
      </button>
      <button
        className={activeCategory === "home-decoration" ? "active" : ""}
        onClick={() => setActiveCategory("home-decoration")}
      >
        Home Decoration
      </button>
    </FilterWrapper>
  );
};

const FilterWrapper = styled.div`
  max-width: 1024px;
  width: 80%;
  margin: 70px auto 0;
  gap: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 20px;

  button {
    padding: 8px 8px;
    border-radius: 15px;
    border: none;
    cursor: pointer;
    background: #fff;
    color: rgb(65, 98, 168);
    border: 1px solid rgb(65, 98, 168);
  }

  button.active {
    background: rgb(65, 98, 168);
    color: #fff;
  }
`;
export default Filter;
