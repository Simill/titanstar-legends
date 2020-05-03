import React from 'react';
import { ITalentIconProps } from './ITalentIcon';
import './talent-icon.scss';

const getIsActiveClass = (props: ITalentIconProps): string =>
  props.isActive ? 'active' : '';

const TalentIcon = (props: ITalentIconProps) => {
  const onClickHandler = () => {
    props.onHandleTalentAdd(props.talentID);
  };

  const onRightClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    props.onHandleTalentRemove(props.talentID);
  };

  return (
    <div
      className={`talent-icon talent-icon--${props.talentID} ${getIsActiveClass(
        props
      )}`}
      onClick={onClickHandler}
      onContextMenu={onRightClickHandler}
    ></div>
  );
};

export default TalentIcon;
