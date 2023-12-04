import r from "../assets/refrigerator-svgrepo-com (1).svg";
import dat from "../assets/clock.svg";
import d from "../assets/down-svgrepo-com.svg";
import left from "../assets/chevron-left.svg";
import star from "../assets/star (1).svg";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Page() {
    const navigate = useNavigate();
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(
      "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1"
    )
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  console.log(repos);

  return (
    <div className="new">
      <div className="mp">
        <img onClick={() => navigate("/")} src={left} height="30px" widht="30px" />

        <div className="one">
          <div className="mu">
            <h1>{repos.name}</h1>
            <img src={star} height="20px" widht="30px" />
          </div>
          <div className="mas">
            <p>
              Mughlai Masala is a style cookery developed in the Indian
              Subcontinent by the imperial kitchens of the Muglai Empire
            </p>
            <img
              src="https://thumbs.dreamstime.com/b/healthy-food-fresh-vegetables-isolated-white-background-close-up-horizontal-photo-47289234.jpg"
              width="300px"
              height="200px"
            />
          </div>
          <div className="bro">
            <img src={dat} height="20px" widht="30px" />
            <p>
              <b>{repos.timeToPrepare}</b>
            </p>
          </div>
        </div>

        <div className="two">
          <h1>Ingredients</h1>
          <div className="tw">
            <p> For 2 people</p>
          </div>
        </div>
        <div className="three">
          <div className="v">
            <h1>Vegetable (05) </h1>
            <img src={d} height="20px" widht="30px" />
          </div>
          <div>
            {repos?.ingredients?.vegetables?.map((item) => {
              return (
                <div className="tt1">
                  <p1>{item.name}</p1>
                  <p2>{item.quantity}</p2>
                </div>
              );
            })}
          </div>
        </div>
        <div className="four">
          <div className="v1">
            <h1>Spices (10) </h1>
            <img src={d} height="20px" widht="30px" />
          </div>
          <div>
            {repos?.ingredients?.spices?.map((item) => {
              return (
                <div className="f">
                  <p1>{item.name}</p1>
                  <p2>{item.quantity}</p2>
                </div>
              );
            })}
          </div>
        </div>
        <div className="five">
          <h1>Appliances</h1>
          <div className="fi"></div>
          <div className="fri">
            {repos?.ingredients?.appliances?.map((item) => {
              return (
                <div className="f">
                  <div className="frii">
                    <p2>
                      <img src={r} height="40px" width="30px " />
                    </p2>
                    <p1>{item.name}</p1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}