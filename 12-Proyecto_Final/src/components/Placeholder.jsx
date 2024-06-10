import React from 'react';

const LoadingPlaceholder = () => {
  return (
    <div className="card recipe-card" aria-hidden="true">
      <div className="placeholder-img"></div>
      <div className="card-body">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder placeholder-title"></span>
        </h5>
      </div>
    </div>
  );
};
export default LoadingPlaceholder;