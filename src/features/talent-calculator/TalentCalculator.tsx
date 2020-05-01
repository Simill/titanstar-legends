import React, { useState } from 'react';
import './talent-calculator.scss';
import { makeTalentPath } from '../shared/helpers/makeTalentPath';

const TalentCalculator = () => {
  const [pointsSpent, setTotalPoints] = useState(0);
  const MAX_POINTS = 6;
  const tree1 = makeTalentPath(['chevrons', 'silverware', 'cake', 'crown']);
  const tree2 = makeTalentPath(['boat', 'scuba-gear', 'lightening', 'skull']);

  return (
    <div className="talent-calculator">
      <div className="talent-calculator__header">
        TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000
      </div>
      <div className="talent-calculator__content">
        <div className="talent-calculator__talent-paths">
          Put some paths here
        </div>
        <div className="talent-calculator__points-spent">
          <span className="talent-calculator__point-text">
            {pointsSpent} / {MAX_POINTS}
          </span>
          <span>Points Spent</span>
        </div>
      </div>
    </div>
  );
};

export default TalentCalculator;
