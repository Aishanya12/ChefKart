import cal from "../assets/calendar.svg"
import dat from "../assets/clock.svg"
export default function Date(){
    return(
        <div className="black">
        <div className="dateContainer">
         <div className="date">
            <img src={cal} color="white"/>
            <p><b>21 May 2021</b></p>
            
        </div>

        <div className="date">
            <img src={dat}></img>
            <p><b >10:20 Pm-12:30 Pm</b></p>
        </div>
    </div>
    </div>
    );
}