import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import NavigationAdmin from "./navigationAdmin";
import FlatList from "flatlist-react";
import { changeUnitList, oneChangeUnitList } from "../../store/unit/types";

import Edit from "./../../icon/edit.svg";
import trush from "../../icon/delete-light.svg";
import { useTypedSelector } from "../../store/store";
import {
  changeInfoAction,
  changeListAction,
  deleteUnitAction,
  getChangeUnitAction,
  getUnitAction,
} from "../../store/unit";
import RenderUnit from "./components/renderUnit";
import Loader from "../preloader/preloader";

function AmdinChange() {
  const dispatch = useDispatch();

  const navigation = useNavigate();

  const visibleLoader = useTypedSelector(s => s.unit.loader);

  useEffect(() => {
    dispatch(changeListAction.request({}));
    dispatch(changeInfoAction.request({}));
  }, []);

  const changeUnit = useTypedSelector((s) => s.unit.changeList);

  const changeInfo = useTypedSelector((s) => s.unit.changeUnitInfo);

  const result = useTypedSelector( s => s.unit.unit)

  const deleteUnit = (id: string) => {
    dispatch(deleteUnitAction.request({ id }));
  };

  const renderItem = (unit: oneChangeUnitList) => {
    return (
      <RenderUnit
        id={unit.id}
        title={unit.title}
        vocabularyText={unit.vocabularyText}
        speakingText={unit.speakingText}
        pronunciationText={unit.pronunciationText}
        onGoToChangeUnit={onGoToChangeUnit}
        deleteUnit={deleteUnit}
        key={unit.id}
      />
    );
  };


  const onGoToChangeUnit = (id:string) => {
    
    navigation(`/adminPanel/Change/${id}`)
    
  }

  useEffect(()=>{
    
  }, [result])

  return (
    <div className="appAdmin">
      <Loader visible={visibleLoader} />
      <NavigationAdmin description="Change unit" />
      <div className="wrapperAdminAdd">
        <div className="header">Change Unit</div>
        <div className="contentAndminChange">
          <div className="publickInfo">
            <h2>Info</h2>
            <div>
              <div>Links: {changeInfo?.links}</div>
              <div>Files: {changeInfo?.files}</div>
              <div>Photo: {changeInfo?.photo}</div>
              <div>Video: {changeInfo?.video}</div>
              <div>Audio: {changeInfo?.audio}</div>
            </div>
          </div>

          <div className="changeUnitBlock">
            <h1>All Unit</h1>
            <FlatList
              reversed
              list={changeUnit}
              renderItem={renderItem}
              renderWhenEmpty={() => <div>List is clear</div>}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AmdinChange;
