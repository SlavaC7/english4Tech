import Edit from "../../../icon/edit.svg";
import trush from "../../../icon/delete-light.svg";
import { useEffect, useState } from "react";
import { useTypedSelector } from "../../../store/store";
import { clearDeleteUnitAction } from "../../../store/unit";

const RenderUnit: React.FC<{
  id: string;
  title: string;
  vocabularyText: string;
  speakingText: string;
  pronunciationText: string;
  onGoToChangeUnit: (id: string) => void;
  deleteUnit: (id: string) => void;
}> = ({
  id,
  title,
  vocabularyText,
  speakingText,
  pronunciationText,
  onGoToChangeUnit,
  deleteUnit,
}) => {
  const [controleVisibleDelete, setControleVisibleDelete] = useState(false);

  const [controleVisibleItem, setControleVisibleItem] = useState(true);

  const [isId, setIsId] = useState(false);

  const [needId, setNeedId] = useState("");

  const onSetVisibleDeleteBlock = () => {
    setControleVisibleDelete(!controleVisibleDelete);

    setControleVisibleItem(!controleVisibleItem);

    console.log(isId, "bool state 1");

    console.log(needId, "id state 1");
  };

  const result = useTypedSelector((s) => s.unit.deleteUnitResult?.result);
  useEffect(() => {
    if (isId == false) {
      if (result == id) {
        setNeedId(id);

        setIsId(!isId);

        console.log(isId, "bool state 2");

        console.log(needId, "id state 2");

        //dispatch(clearDeleteUnitAction.request({})); // тут что-то не так
      }
    }
  }, [result]);

  return (
    <div className="changeUnitItem">
      <div
        className="changeUnitItemMain"
        style={{ display: controleVisibleItem ? "flex" : "none" }}
      >
        <div className="changeUnitInfoBlock">
          <h2>{title}</h2>
          <div className="contentUnit">
            <div className="contentUnitItem">
              <h3>vocabulary:</h3>
              <div className="halfContent">{vocabularyText}</div>
            </div>

            <div className="contentUnitItem">
              <h3>Speaking:</h3>
              <div className="halfContent">{speakingText}</div>
            </div>

            <div className="contentUnitItem">
              <h3>pronunciation:</h3>
              <div className="halfContent">{pronunciationText}</div>
            </div>
          </div>
        </div>

        <div className="iconBlock">
          <div className="iconEditBlock"  onClick={() => onGoToChangeUnit(id)}>
            <img src={Edit} className="editIconChange" />
            <p>Edit</p>
          </div>
          <div
            className="iconEditBlock"
            onClick={() => onSetVisibleDeleteBlock()}
          >
            <img src={trush} className="deleteIconChange" />
            <p>Delete</p>
          </div>
        </div>
      </div>

      <div
        className="changeUnitItemDelete"
        style={{ display: controleVisibleDelete ? "flex" : "none" }}
      >
        {needId == id ? (
          <h1>Unit Deleted</h1>
        ) : (
          <div className="changeUnitItemDelete">
            <h2>Do you reall want to delete {title}? </h2>
            <div className="buttonBlock">
              <div className="agreeButtonDelete" onClick={() => deleteUnit(id)}>
                Delete
              </div>
              <div
                className="disagreeButtonDelete"
                onClick={() => onSetVisibleDeleteBlock()}
              >
                Back
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default RenderUnit;
