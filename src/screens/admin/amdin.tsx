import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { useDispatch } from "react-redux";
import "./style.css";
import { getUnitAction, getUnitListAction } from "../../store/unit/action";
import { useTypedSelector } from "../../store/store";
import FlatList from "flatlist-react";
import { oneUnitPayload } from "../../store/unit/types";
import Profile from "../../icon/profile.svg";
import { Link } from "react-router-dom";
import NavigationAdmin from "./navigationAdmin";
import Loader from "../preloader/preloader";

function Admin() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUnitListAction.request({}));
  }, []);

  const unit = useTypedSelector((s) => s.unit.unitList);

  const [chekUnit, setCheckUnit] = useState("");

  const [text, setText] = useState({
    vocabulary: "vocabulary text",
    gramar: "Gramar text",
    pronunciation: "Pronunciation text",
    link: "https://www.youtube.com/embed/den68FCZ4VE",
  });

  const oneUnit = useTypedSelector((s) => s.unit.unit);

  const onChangeUnit = (id: string) => {
    dispatch(getUnitAction.request({ id }));

    setCheckUnit(id);
  };
  const renderUnit = (unit: oneUnitPayload) => {
    if (unit.id == chekUnit) {
      return (
        <div
          className="unitBlockActive"
          onClick={() => onChangeUnit(unit.id)}
          key={unit.id}
        >
          <h2>{unit.title}</h2>
          <div className="description">{unit.description}</div>
        </div>
      );
    } else {
      return (
        <div
          className="unitBlock"
          onClick={() => onChangeUnit(unit.id)}
          key={unit.id}
        >
          <h2>{unit.title}</h2>
          <div className="description">{unit.description}</div>
        </div>
      );
    }
  };

  return (
    <div className="appAdmin">
      <Loader visible={false} />
      <NavigationAdmin description="home" />
      <div className="wrapperAdmin">
        <div className="header">
          <h1>Add Unit</h1>
        </div>
        <div className="contentAndmin">
          <div className="welcome">
            <p className="welcomeTitle">Welcome</p>
            <p className="welcomeTitle2">in admin panel</p>
            <div className="welcomeV">
              <p className="welcomeDesc">Сhoose an option</p>
              <ul className="welcomeUL">
                <li>
                    Add unit
                </li>
                <li>Change unit</li>
                <li>Check profiles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
