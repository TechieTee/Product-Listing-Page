import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";

const Shop = () => {
  const [items, setItems] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    dummyShop();
  }, []);

  // Fetch Data
  const dummyShop = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const jsonData = await response.json();
    const productData = jsonData.products;
    setItems(productData);
    setFiltered(productData);
    console.log("lll", items);
  };

  // Search by item's title
  const data = Object.values(items);
  const search_parameters = Object.keys(Object.assign({}, ...data));
  function search(items) {
    return items.filter((item) =>
      search_parameters.some(() =>
        item.title.toString().toLowerCase().includes(searchWord)
      )
    );
  }

  return (
    <>
      <Heading>
        <h1>Hello, stop by my Store🤗</h1>
        <p>
          There are{" "}
          <span style={{ color: "#b0960a", fontWeight: "bold" }}>
            New Arrivals
          </span>{" "}
          just for you! Check them out to select a new product.
        </p>
      </Heading>

      <SearchWrapper>
        <label htmlFor="search-form">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Search item..."
            onChange={(e) => setSearchWord(e.target.value)}
          />
        </label>
      </SearchWrapper>

      <Filter
        data={data}
        setFiltered={setFiltered}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <ProductsContainer
       
      >
        {search(filtered).map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </ProductsContainer>
    </>
  );
};

//Styled Components
const Heading = styled.div`
  margin-top: 8rem;
  text-align: center;
`;

const ProductsContainer = styled.div`
  max-width: 1024px;
  width: 80%;
  margin: 70px auto 0;
  gap: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
`;

/* search input */
const SearchWrapper = styled.div`
  max-width: 1024px;
  width: 80%;
  margin: 70px auto 0;
  gap: 12px;
  display: grid;
  grid-gap: 15px;

  @media (max-width: 375px) {
    .search-input {
      width: 100%;
    }
    .search-wrapper {
      justify-content: start;
      flex-wrap: wrap;
    }
    .select {
      margin-top: 3.5em;
    }
  }

  .search-input {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xNS44NTMgMTYuNTZjLTEuNjgzIDEuNTE3LTMuOTExIDIuNDQtNi4zNTMgMi40NC01LjI0MyAwLTkuNS00LjI1Ny05LjUtOS41czQuMjU3LTkuNSA5LjUtOS41IDkuNSA0LjI1NyA5LjUgOS41YzAgMi40NDItLjkyMyA0LjY3LTIuNDQgNi4zNTNsNy40NCA3LjQ0LS43MDcuNzA3LTcuNDQtNy40NHptLTYuMzUzLTE1LjU2YzQuNjkxIDAgOC41IDMuODA5IDguNSA4LjVzLTMuODA5IDguNS04LjUgOC41LTguNS0zLjgwOS04LjUtOC41IDMuODA5LTguNSA4LjUtOC41eiIvPjwvc3ZnPg==");
    background-color: #fff;
    background-size: 16px 16px;
    background-position: left 10px center;
    background-repeat: no-repeat;
    width: 100%;
    padding: 1.4em 2em;
    padding-left: 2.7em;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    color: #858585;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .search-input:hover {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);
  }
`;

export default Shop;
