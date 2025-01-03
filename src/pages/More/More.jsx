import "../More/More.scss";

/* eslint-disable react/prop-types */
import { NavLink, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Profile from "../../components/Profile/Profile";

const More = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [option, setOption] = useState(searchParams.get("option") || "profile");

  useEffect(() => {
    const currentOption = searchParams.get("option") || "profile";
    setOption(currentOption);
  }, [searchParams]);

  const handleOptionChange = (newOption) => {
    setOption(newOption);
    setSearchParams({ option: newOption });
  };

  return (
    <div className="more">
      <div className="wrapper">
        <div className="title">
          <NavLink
            to="?option=profile"
            className={option === "profile" ? "active-link" : ""}
            onClick={() => handleOptionChange("profile")}
          >
            <p>Profile</p>
          </NavLink>

          <NavLink
            to="?option=security"
            className={option === "security" ? "active-link" : ""}
            onClick={() => handleOptionChange("security")}
          >
            <p>Security</p>
          </NavLink>

          <NavLink
            to="?option=preference"
            className={option === "preference" ? "active-link" : ""}
            onClick={() => handleOptionChange("preference")}
          >
            <p>Preference</p>
          </NavLink>

          <NavLink
            to="?option=refer"
            className={option === "refer" ? "active-link" : ""}
            onClick={() => handleOptionChange("refer")}
          >
            <p>Refer</p>
          </NavLink>

          <NavLink
            to="?option=others"
            className={option === "others" ? "active-link" : ""}
            onClick={() => handleOptionChange("others")}
          >
            <p>Others</p>
          </NavLink>
        </div>

        <div className="contents">
          <Content option={option} />
        </div>
      </div>
    </div>
  );
};

const Content = ({ option }) => {
  switch (option) {
    case "profile":
      return <Profile />;
  }
};

export default More;
