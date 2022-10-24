import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/pipt.png";
import { FaUsers, FaBookReader, FaBookOpen, FaPage4, FaInbox, FaMailBulk, FaFirstdraft, FaCalendarTimes, FaMoneyCheck, FaMoneyBill, FaDollarSign } from "react-icons/fa";
import { BiGroup } from "react-icons/bi";
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import scrollreveal from "scrollreveal";
export default function Sidebar() {
  const [currentLink, setCurrentLink] = useState(1);
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "80px",
      duration: 1000,
      reset: false,
    });

    sr.reveal(
      `
          .brand,
          .links>ul>li:nth-of-type(1),
      .links>ul>li:nth-of-type(2),
      .links>ul>li:nth-of-type(3),
      .links>ul>li:nth-of-type(4),
      .links>ul>li:nth-of-type(5),
      .links>ul>li:nth-of-type(6),
      .logout
      `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            <div className="image">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
          <div className="links">

            {/* dashboard */}
            <div>
            <ul>
            <li
                className={currentLink === 1 ? "active" : "none"}
                onClick={() => setCurrentLink(1)}
              >
                <a href="#">
                  <MdSpaceDashboard />
                  <span> Dashboard</span>
                </a>
              </li>
            </ul>
            </div>

            {/* management */}

            <div>
            <p style={{textAlign:"start" , color:"#A5A1A1" , marginLeft:15}}>Management</p>
            <ul>
              <li
                className={currentLink === 2 ? "active" : "none"}
                onClick={() => setCurrentLink(2)}
              >
                <a href="#">
                  <BiGroup />
                  <span> Staff</span>
                </a>
              </li>
              <li
                className={currentLink === 3 ? "active" : "none"}
                onClick={() => setCurrentLink(3)}
              >
                <a href="#">
                  <FaUsers />
                  <span> Students </span>
                </a>
              </li>
              <li
                className={currentLink === 4 ? "active" : "none"}
                onClick={() => setCurrentLink(4)}
              >
                <a href="#">
                  <FaAddressCard />
                  <span> Designation </span>
                </a>
              </li>
            </ul>
            </div>

             {/* Accounts */}

             <div>
            <p style={{textAlign:"start" , color:"#A5A1A1" , marginLeft:15}}>Accounts</p>
            <ul>
              <li
                className={currentLink === 5 ? "active" : "none"}
                onClick={() => setCurrentLink(5)}
              >
                <a href="#">
                  <FaDollarSign />
                  <span> Fees</span>
                </a>
              </li>
              <li
                className={currentLink === 6 ? "active" : "none"}
                onClick={() => setCurrentLink(6)}
              >
                <a href="#">
                  <FaMoneyBill />
                  <span> Salary </span>
                </a>
              </li>
              <li
                className={currentLink === 7 ? "active" : "none"}
                onClick={() => setCurrentLink(7)}
              >
                <a href="#">
                  <FaMoneyCheck />
                  <span> Other Expenditures </span>
                </a>
              </li>
            </ul>
            </div>

             {/* Academics */}

             <div>
            <p style={{textAlign:"start" , color:"#A5A1A1" , marginLeft:15}}>Academics</p>
            <ul>
              <li
                className={currentLink === 8 ? "active" : "none"}
                onClick={() => setCurrentLink(8)}
              >
                <a href="#">
                  <FaCalendarTimes />
                  <span> Term </span>
                </a>
              </li>
              <li
                className={currentLink === 9 ? "active" : "none"}
                onClick={() => setCurrentLink(9)}
              >
                <a href="#">
                  <FaBookReader />
                  <span> Courses </span>
                </a>
              </li>
              <li
                className={currentLink === 10 ? "active" : "none"}
                onClick={() => setCurrentLink(10)}
              >
                <a href="#">
                  <FaBookOpen />
                  <span> Units </span>
                </a>
              </li>
              <li
                className={currentLink === 11 ? "active" : "none"}
                onClick={() => setCurrentLink(11)}
              >
                <a href="#">
                  <FaPage4 />
                  <span> Examination </span>
                </a>
              </li>
            </ul>
            </div>

             {/* Emails/Sms */}

             <div>
            <p style={{textAlign:"start" , color:"#A5A1A1" , marginLeft:15}}>Emails/Sms</p>
            <ul>
              <li
                className={currentLink === 12 ? "active" : "none"}
                onClick={() => setCurrentLink(12)}
              >
                <a href="#">
                  <FaInbox />
                  <span> Inbox </span>
                </a>
              </li>
              <li
                className={currentLink === 13 ? "active" : "none"}
                onClick={() => setCurrentLink(13)}
              >
                <a href="#">
                  <FaMailBulk />
                  <span> Sent </span>
                </a>
              </li>
              <li
                className={currentLink === 14 ? "active" : "none"}
                onClick={() => setCurrentLink(14)}
              >
                <a href="#">
                  <FaFirstdraft />
                  <span> Drafts </span>
                </a>
              </li>
            </ul>
            </div>


          </div>
        </div>
        <div className="logout">
          <a href="#">
            <FiLogOut />
            <span className="logout">Logout</span>
          </a>
        </div>
      </Section>
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <div className="responsive__links">
           {/* dashboard */}
           <div>
            <ul>
            <li
                className={currentLink === 1 ? "active" : "none"}
                onClick={() => setCurrentLink(1)}
              >
                <a href="#">
                  <MdSpaceDashboard />
                  <span> Dashboard</span>
                </a>
              </li>
            </ul>
            </div>

            {/* management */}

            <div>
            <p style={{textAlign:"start" , color:"#A5A1A1" , marginLeft:15}}>Management</p>
            <ul>
              <li
                className={currentLink === 2 ? "active" : "none"}
                onClick={() => setCurrentLink(2)}
              >
                <a href="#">
                  <BiGroup />
                  <span> Staff</span>
                </a>
              </li>
              <li
                className={currentLink === 3 ? "active" : "none"}
                onClick={() => setCurrentLink(3)}
              >
                <a href="#">
                  <FaUsers />
                  <span> Students </span>
                </a>
              </li>
              <li
                className={currentLink === 4 ? "active" : "none"}
                onClick={() => setCurrentLink(4)}
              >
                <a href="#">
                  <FaAddressCard />
                  <span> Designation </span>
                </a>
              </li>
            </ul>
            </div>

             {/* Accounts */}

             <div>
            <p style={{textAlign:"start" , color:"#A5A1A1" , marginLeft:15}}>Accounts</p>
            <ul>
              <li
                className={currentLink === 5 ? "active" : "none"}
                onClick={() => setCurrentLink(5)}
              >
                <a href="#">
                  <FaDollarSign />
                  <span> Fees</span>
                </a>
              </li>
              <li
                className={currentLink === 6 ? "active" : "none"}
                onClick={() => setCurrentLink(6)}
              >
                <a href="#">
                  <FaMoneyBill />
                  <span> Salary </span>
                </a>
              </li>
              <li
                className={currentLink === 7 ? "active" : "none"}
                onClick={() => setCurrentLink(7)}
              >
                <a href="#">
                  <FaMoneyCheck />
                  <span> Other Expenditures </span>
                </a>
              </li>
            </ul>
            </div>

             {/* Academics */}

             <div>
            <p style={{textAlign:"start" , color:"#A5A1A1" , marginLeft:15}}>Academics</p>
            <ul>
              <li
                className={currentLink === 8 ? "active" : "none"}
                onClick={() => setCurrentLink(8)}
              >
                <a href="#">
                  <FaCalendarTimes />
                  <span> Term </span>
                </a>
              </li>
              <li
                className={currentLink === 9 ? "active" : "none"}
                onClick={() => setCurrentLink(9)}
              >
                <a href="#">
                  <FaBookReader />
                  <span> Courses </span>
                </a>
              </li>
              <li
                className={currentLink === 10 ? "active" : "none"}
                onClick={() => setCurrentLink(10)}
              >
                <a href="#">
                  <FaBookOpen />
                  <span> Units </span>
                </a>
              </li>
              <li
                className={currentLink === 11 ? "active" : "none"}
                onClick={() => setCurrentLink(11)}
              >
                <a href="#">
                  <FaPage4 />
                  <span> Examination </span>
                </a>
              </li>
            </ul>
            </div>

             {/* Emails/Sms */}

             <div>
            <p style={{textAlign:"start" , color:"#A5A1A1" , marginLeft:15}}>Emails/Sms</p>
            <ul>
              <li
                className={currentLink === 12 ? "active" : "none"}
                onClick={() => setCurrentLink(12)}
              >
                <a href="#">
                  <FaInbox />
                  <span> Inbox </span>
                </a>
              </li>
              <li
                className={currentLink === 13 ? "active" : "none"}
                onClick={() => setCurrentLink(13)}
              >
                <a href="#">
                  <FaMailBulk />
                  <span> Sent </span>
                </a>
              </li>
              <li
                className={currentLink === 14 ? "active" : "none"}
                onClick={() => setCurrentLink(14)}
              >
                <a href="#">
                  <FaFirstdraft />
                  <span> Drafts </span>
                </a>
              </li>
            </ul>
            </div>
        </div>
      </ResponsiveNav>
    </>
  );
}
const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #212121;
  overflow-y: scroll;
  height: calc(100vh - 1px);
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    .toggle {
      display: none;
    }
    .brand {
      // width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      // gap: 2rem;
      .image {
        // overflow: hidden;
        img {
          height: 6rem;
          width: 10rem;
          // object-fit: cover;
          transition: 0.5s ease-in-out;
        }
        &:hover {
          img {
            transform: scale(1.1);
          }
        }
      }
      svg {
        color: #ffc107;
        font-size: 2rem;
      }
    }
    .links {
      display: flex;
      flex-direction: column;
      width: 17vw;
      gap: 0.3rem;
      justify-content: center;
      ul {
        list-style-type: none;
        margin-left: 2rem;
        display: flex;
        margin-top: 0.5rem;
        margin-bottom: 0.4rem;
        flex-direction: column;
        gap: 0.1rem;
        li {
          padding: 0.2rem 0.4rem;
          border-radius: 0.6rem;
          &:hover {
            background-color: #0ba2de;
            a {
              color: black;
            }
          }
          a {
            text-decoration: none;
            font-size: 0.9rem;
            display: flex;
            gap: 1rem;
            color: white;
            margin-left: 0.8rem;
          }
        }
        .active {
          background-color: #0ba2de;
          a {
            color: black;
          }
        }
      }
    }
  }

  .logout {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    &:hover {
      background-color: #da0037;
    }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: white;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    overflow-y: scroll;
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle {
        display: block;
        color: white;
        z-index: 99;
        svg {
          font-size: 1.4rem;
        }
      }
      .brand {
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .top > .links,
    .logout {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  overflow-y: scroll;
  height: calc(100vh - 1px);
  position: fixed;
  right: -10vw;
  top: 0;
  z-index: 10;
  background-color: black;
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.4s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  padding: 1rem;
  .responsive__links {
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 3rem;
      li {
        padding: 0.6rem 1rem;
        border-radius: 0.6rem;
        &:hover {
          background-color: #ffc107;
          a {
            color: black;
          }
        }
        a {
          text-decoration: none;
          display: flex;
          gap: 1rem;
          color: white;
        }
      }
      .active {
        background-color: #ffc107;
        a {
          color: black;
        }
      }
    }
  }
`;
