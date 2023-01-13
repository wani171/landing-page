import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";

const Products = () => {
  const { products } = useGlobalContext();
  console.log(products);

  return (
    <Wrapper>
      <center>
      <div class="row">
        <div class="column">
          <img src="./images/dog food 2.jfif" alt="products" className="products" />
        </div>
        <div class="column">
          <img src="./images/dog toys.jfif" alt="products" className="products" />
        </div>
      </div>
      </center>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }

  .column {
    float: left;
    width: 50%;
    padding: 5px;
    object-fit: contain;
  }

  .row::after {
    content: "";
    clear: both;
    display: table;
  }

`;

export default Products;
