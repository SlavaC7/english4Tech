import plus from "../../../icon/plus.svg";
import minus from "../../../icon/minus.svg";
import ImageUploading from "react-images-uploading";
import appLoad from "../../../icon/appLoad.svg";
import trush from "../../../icon/delete.svg";
import { Link } from "react-router-dom";

const NavigationAdmin: React.FC<{
  description: string;
}> = ({ description }) => {
  return (
    <div className="nav">
      <div className="navHeader">
        E4T
        <span className="descriptionNavAdmin">{description}</span>
      </div>
      <ul className="navList">
        <Link to={"/adminPanel"} className="adminLink">
          <li>
            <span>Home</span>
          </li>
        </Link>
        <Link to={"/adminPanel/Add"} className="adminLink">
          <li>
            <span>Add unit</span>
          </li>
        </Link>
        <Link to={"/adminPanel/Change"} className="adminLink">
          <li>
            <span>Change unit</span>
          </li>
        </Link>
        <Link to={"/"} className="adminLink">
          <li>
            <span>Visit Site</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};
export default NavigationAdmin;
