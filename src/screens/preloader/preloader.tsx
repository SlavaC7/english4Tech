import { FileContent } from "use-file-picker/dist/interfaces";
import wordFile from "../../../icon/wordFile.svg";
import "./styleLoader.css";

const Loader: React.FC<{
  visible: boolean;
}> = ({
  visible,
}) => {
  return (
    <div id="loaderBody" style={{display:visible?"block":"none"}}>
      <div id="loaderBlock">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
export default Loader;
