import React from "react";
import styled from "styled-components";
import { FaUsers, FaBookReader, FaBookOpen } from "react-icons/fa";
import { BiGroup } from "react-icons/bi";
import { cardStyles } from "./ReusableStyles";
export default function Analytics() {
  return (
    <Section>
      <div className="analytic ">
        <div className="content">
          <h5>Students</h5>
          <h2>300</h2>
        </div>
        <div className="logo">
          <FaUsers />
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <FaBookReader />
        </div>
        <div className="content">
          <h5>Courses</h5>
          <h2>50</h2>
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <BiGroup />
        </div>
        <div className="content">
          <h5>Staffs</h5>
          <h2>10</h2>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <h5>Units</h5>
          <h2>100</h2>
        </div>
        <div className="logo">
          <FaBookOpen />
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .analytic {
    ${cardStyles};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #0ba2de;
      color: black;
      svg {
        color: white;
      }
    }
    .logo {
      background-color: black;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    .analytic {
      &:nth-of-type(3),
      &:nth-of-type(4) {
        flex-direction: row-reverse;
      }
    }
  }
`;
