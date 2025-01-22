import React from 'react';
import PropTypes from 'prop-types';

import strings from '../../locales/en.json'; // Import the localized strings

const Info = ({ weight, height, id, date, bmi, deleteCard }) => {
  const handleDelete = () => {
    deleteCard(id);
  };

  return (
    <div className="col m6 s12">
      <div className="card">
        <div className="card-content">
          <span className="card-title" data-test="bmi">
          {strings.bmiLabel}: {bmi}
          </span>
          <div className="card-data">
            <span data-test="weight">{strings.weight}: {weight} kg</span>
            <span data-test="height">{strings.height}: {height} cm</span>
            <span data-test="date">{strings.date}: {date}</span>
          </div>

          <button className="delete-btn" onClick={handleDelete}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

Info.propTypes = {
  weight: PropTypes.string,
  height: PropTypes.string,
  id: PropTypes.string,
  date: PropTypes.string,
  bmi: PropTypes.string,
  deleteCard: PropTypes.func
};

export default Info;
