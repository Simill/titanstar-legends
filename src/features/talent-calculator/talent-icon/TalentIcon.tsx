import React from 'react';
import { ITalentIconProps } from './ITalentIcon';
import './talent-icon.scss';

const getIsActiveClass = (props: ITalentIconProps): string =>
  props.isActive ? 'active' : '';

/**
 * A single talent icon. This will handle styling both the particular icon and the active state of the talent.
 * @param props - The talent icon and the is active state.
 * @returns the styled talent icon.
 */
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
