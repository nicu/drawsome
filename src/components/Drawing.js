import React from 'react';

const Drawing = ({ lines, scaleFactor = 1 }) => {
  let i = 0;
  return (
    <svg
      version="1.1"
      baseProfile="full"
      width={250 * scaleFactor}
      height={300 * scaleFactor}
      xmlns="http://www.w3.org/2000/svg"
    >
      {lines.map(line =>
        line.points.map(point => (
          <circle
            cx={point.x * scaleFactor}
            cy={point.y * scaleFactor}
            r={line.thickness * scaleFactor / 2}
            fill={line.color}
            key={'p' + i++}
          />
        ))
      )}
      {lines.map(line => (
        <polyline
          fill="none"
          strokeLinecap="round"
          stroke={line.color}
          strokeLinejoin="round"
          strokeWidth={line.thickness * scaleFactor}
          points={line.points
            .reduce((acc, point) => {
              acc.push(point.x * scaleFactor + ' ' + point.y * scaleFactor);
              return acc;
            }, [])
            .join(', ')}
          key={'pl' + i++}
        />
      ))}
    </svg>
  );
};

export default Drawing;
