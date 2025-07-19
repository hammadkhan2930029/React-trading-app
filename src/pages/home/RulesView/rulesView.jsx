import React from 'react';
import './rulesView.css';

export const RulesView = () => {
  const rulesData = [
    { id: 1, ruleNo: 1, rule: 'Always write clean code.' },
    { id: 2, ruleNo: 2, rule: 'Use meaningful variable names.' },
    { id: 3, ruleNo: 3, rule: 'Keep components small and reusable Keep components small and reusable Keep components small and reusable Keep components small and reusable.' },
    { id: 4, ruleNo: 4, rule: 'Write comments where needed.' },
    { id: 5, ruleNo: 5, rule: 'Test your code properly.' },
    { id: 6, ruleNo: 6, rule: 'Keep components small and reusable Keep components small and reusable Keep components small and reusable Keep components small and reusable Keep components small and reusable Keep components small and reusable Keep components small and reusable Keep components small and reusable.' },
  ];

  return (
    <div className='rulesView_container'>

    <div className="rules-list-container">
      <h2 className="rules-list-heading">📜 My Rules Book</h2>
      <div className="rules_grid">
        {rulesData.map(item => (
          <div key={item.id} className="rule_card">
            <div className="rule_number">

            <span >Rule #{item.ruleNo}</span>
            </div>
            <p className="rule_text">{item.rule}</p>
          </div>
        ))}
      </div>
    </div>
    </div>

  );
};
