/* eslint-disable react/prop-types */
import "./CircularProgress.scss";

const CircularProgress = ({ progress }) => {
  return (
    <div className="circular-progress">
      <svg
        className="progress-ring"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle className="progress-ring__background" cx="50" cy="50" r="45" />
        <circle
          className="progress-ring__progress"
          cx="50"
          cy="50"
          r="45"
          style={{
            strokeDasharray: `${2 * Math.PI * 45}`,
            strokeDashoffset: `${
              2 * Math.PI * 45 - (progress / 100) * 2 * Math.PI * 45
            }`,
          }}
        />
      </svg>
      <div className="progress-text">{`${progress}%`}</div>
    </div>
  );
};

export default CircularProgress;
