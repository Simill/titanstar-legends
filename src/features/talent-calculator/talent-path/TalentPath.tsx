import React from 'react';
import { ITalentPathProps } from './ITalentPathProps';
import './talent-path.scss';
import TalentIcon from '../talent-icon/TalentIcon';
import { ITalent } from '../../shared/interfaces/ITalent';

/**
 * Constructs a talent path from a root talent.
 * While building the talent icons, a styled div will be rendered to connect the icons.
 * @param props - Props for building the talent path.
 * @returns A talent path.
 */
const TalentPath = (props: ITalentPathProps) => {
  const buildTalentPath = (talentID: string): JSX.Element => {
    const talent = props.talentsMap[talentID];
    let renderedPathOutput = (
      <TalentIcon
        talentID={talent.id}
        isActive={talent.isActive}
        onHandleTalentAdd={props.onHandleTalentAdd}
        onHandleTalentRemove={props.onHandleTalentRemove}
      />
    );

    if (talent.next) {
      renderedPathOutput = (
        <>
          {renderedPathOutput}
          {renderPathDiv(talent)}
          {buildTalentPath(talent.next)}
        </>
      );
    }
    return renderedPathOutput;
  };

  const renderPathDiv = (talent: ITalent) => {
    return (
      <div
        className={`talent-path__path ${
          talent.isActive ? 'talent-path__path--active' : ''
        }`}
      />
    );
  };

  return (
    <div className="talent-path">
      <span className="talent-path__title">{props.title}</span>
      {buildTalentPath(props.rootTalentID)}
    </div>
  );
};

export default TalentPath;
