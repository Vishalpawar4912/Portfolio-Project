import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import PageHeaderContent from "../../components/pageHeaderContent";
import ImageOne from "../../images/calculator.jpg";
import ImageTwo from "../../images/CharCount.webp";
import ImageThree from "../../images/Reactjs_CRUD.webp";
import ImageFour from "../../images/Twitter_Signin.png";
import "./styles.scss";

const ProjectData = [
  {
    id: 2,
    name: "Calculator App",
    image: ImageOne,
    link: "/projects/calculator",
  },
  {
    id: 2,
    name: "Character_Count App",
    image: ImageTwo,
    link: "/projects/charcount",
  },
  {
    id: 2,
    name: "Reactjs_CRUD App",
    image: ImageThree,
    link: "/projects/crud-app", 
  },
  {
    id: 3,
    name: "Twitter_Signin App",
    image: ImageFour,
    link: "/projects/twitter-signin",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Project = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================");
  console.log(hoveredValue);
  console.log("====================");

  const filteredItems =
    filteredvalue === 1
      ? ProjectData
      : ProjectData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="project" className="project">
      <PageHeaderContent
        headerText="My Project"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="project__content">
        <ul className="project__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="project__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="project__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="project__content__cards__item__img-wrapper">
                <a>
                  <img alt="Project Data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <Link to={item.link}>
                      <button>Visit</button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Project;
