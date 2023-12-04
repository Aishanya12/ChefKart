import a from "../assets/archive.svg";
import s from "../assets/star (1).svg";
import veg from "../assets/veg-icon.svg";
import d from "../assets/down-svgrepo-com.svg";
import right from "../assets/chevron-right (1).svg";
import { useNavigate } from "react-router-dom";
export default function Rec(props) {
  const navigate = useNavigate();

  return (
    <div className="recContainer">
      <div className="Rec">
        <div className="a">
        <h1> Recommended</h1>
        <img src={d} height="20px" widht="30px" />
        </div>
        <button className="btn" type="submit">
          Menu
        </button>
      </div>
      <div className="ss">
        {props?.data?.map((dish) => {
          return (
            <div className="works" key={dish.id}>
              <div className="muglai">
                <div className="leftt">
                  <p>
                    <b>{dish.name}</b>{" "}
                  </p>
                </div>
                <div className="newim">
                  <img src={dish.image} height="20px" widht="30px " />
                </div>
                <div className="newim">
                  {" "}
                  <img src={veg} height="20px" widht="30px" />
                </div>
              </div>

              <div className="list">
                <div className="left">
                  <img src={a} height="20px" widht="30px " />
                  <p>Refrigerator</p>
                </div>
                <div className="left">
                  <img src={a} height="20px" widht="30px " />
                  <p>Refrigerator</p>
                </div>
                <div className="itemss">
                  <div classNanme="Items">
                    <p>
                      <b>Ingredients</b>
                    </p>
                  </div>
                  <div className="items">
                    <p onClick={() => navigate("/Page")}>View</p>

                    <img onClick={() => navigate("/Page")}src={right} alt="" />
                  </div>
                </div>

                <div className="wut">
                  <img
                    src="https://www.flavorsofmumbai.com/wp-content/uploads/2014/02/Mughlai-Chicken-Masala-121-1280x720.jpg"
                    width="150px"
                    height="150px"
                    border-radius="4px"
                  ></img>
                </div>
              </div>
              <div className="btt">
                <div className="recipe">
                  <p>
                    {dish.description}
                  </p>
                </div>
                <button className="bt" type="submit">
                  Add <sup>+</sup>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}