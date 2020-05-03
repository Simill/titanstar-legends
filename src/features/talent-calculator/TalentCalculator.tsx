import React, { useState } from 'react';
import './talent-calculator.scss';
import TalentPath from './talent-path/TalentPath';
import { ITalentCalculatorProps } from './ITalentCalculatorProps';

const TalentCalculator = (props: ITalentCalculatorProps) => {
  const [pointsSpent, setTotalPoints] = useState(0);

  /**
   * Adds a single talent. Does nothing if we have spent max points,the talent is active, or the previous talent is not active.
   * @param talentID - The talent's ID.
   */
  const handleAddTalent = (talentID: string): void => {
    const talent = props.talentsMap[talentID];
    const prevTalent = props.talentsMap[talent.prev];
    if (
      pointsSpent >= props.maxTalentPoints ||
      talent.isActive ||
      (prevTalent && !prevTalent.isActive)
    )
      return;
    talent.isActive = true;
    setTotalPoints(pointsSpent + 1);
  };

  /**
   * Removes a talent and any subsequent active talents. Does nothing if the talent clicked is not active.
   * @param talentID - The starting talent ID.
   */
  const handleRemoveTalent = (talentID: string): void => {
    const talent = props.talentsMap[talentID];
    if (!talent.isActive) return;

    talent.isActive = false;
    let pointsRemoved = 1;

    let tempTalent = talent;
    while (tempTalent.next) {
      tempTalent = props.talentsMap[tempTalent.next];
      if (!tempTalent.isActive) break;

      tempTalent.isActive = false;
      pointsRemoved += 1;
    }

    setTotalPoints(pointsSpent - pointsRemoved);
  };

  return (
    <div className="talent-calculator">
      <div className="talent-calculator__header">
        TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000
      </div>
      <div className="talent-calculator__content">
        <div className="talent-calculator__talent-paths">
          {props.talentPathData.map((talentPathData) => (
            <TalentPath
              key={talentPathData.rootTalentID}
              rootTalentID={talentPathData.rootTalentID}
              onHandleTalentAdd={handleAddTalent}
              onHandleTalentRemove={handleRemoveTalent}
              title={talentPathData.title}
              talentsMap={props.talentsMap}
            />
          ))}
        </div>
        <div className="talent-calculator__points-spent">
          <span className="talent-calculator__point-text">
            {pointsSpent} / {props.maxTalentPoints}
          </span>
          <span>Points Spent</span>
        </div>
      </div>
    </div>
  );
};

export default TalentCalculator;
