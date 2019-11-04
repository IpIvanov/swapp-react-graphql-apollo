/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { RadarChart, CircularGridLines } from 'react-vis';

const StarshipRadarChart = (
  { starshipData: { starshipClass, maxAtmosphericSpeed, cost, crew, hyperdriveRating, maxMLPerHour },
    allStarshipsData },
) => {
  const data = allStarshipsData.filter((starship) => starship.node.starshipClass === starshipClass)
    .map((
      { node: { cost: Cost, crew: Crew, hyperdriveRating: hdRating, maxMLPerHour: maxMlPHour, maxAtmosphericSpeed: maSpeed } },
    ) => ({ Cost, Crew, 'HyperD Rat.': hdRating, 'Max ML/h': maxMlPHour, 'Max Atm. Speed': maSpeed }));
  let DOMAIN = [
    { name: 'Max Atm. Speed', domain: [0, Math.max(...data.map((o) => o['Max Atm. Speed']), 0)], tickFormat: (t) => t },
    { name: 'Cost', domain: [0, Math.max(...data.map((o) => o.Cost), 0)] },
    { name: 'Crew', domain: [0, Math.max(...data.map((o) => o.Crew), 0)] },
    { name: 'HyperD Rat.', domain: [0, Math.max(...data.map((o) => o['HyperD Rat.']), 0) + 100] },
    { name: 'Max ML/h', domain: [0, Math.max(...data.map((o) => o['Max ML/h']), 0)] },
  ];

  const dataObject = () => {
    const obj = {};
    if (maxAtmosphericSpeed) {
      obj['Max Atm. Speed'] = maxAtmosphericSpeed;
    }
    if (cost) {
      obj.Cost = cost;
    }
    if (crew) {
      obj.Crew = crew;
    }
    if (hyperdriveRating) {
      obj['HyperD Rat.'] = hyperdriveRating;
    }
    if (maxMLPerHour) {
      obj['Max ML/h'] = maxMLPerHour;
    }

    return obj;
  };

  const DATA = [
    dataObject(),
  ];

  DOMAIN = DOMAIN.map((item) => Object.keys(DATA[0]).map((title) => {
    if (title === item.name) {
      return item;
    }

    return undefined;
  })).flat().filter((item) => item !== undefined);

  return (
    <RadarChart
      animation
      data={DATA}
      domains={DOMAIN}
      style={{
        polygons: {
          fillOpacity: 0.4,
          strokeWidth: 2,
          strokeOpacity: 1,
        },
        axes: {
          text: {
            opacity: 1,
          },
          line: {
            strokeWidth: 2,
          },
        },
        labels: {
          textAnchor: 'middle',
          fontSize: 12,
          fontWeight: 600,
          fill: '#fff',
        },
      }}
      margin={{
        left: 50,
        top: 40,
        right: 50,
      }}
      width={400}
      height={400}
    >
      <CircularGridLines
        style={{ stroke: '#333' }}
        tickValues={[...new Array(10)].map((v, i) => i / 10 - 1)}
      />
    </RadarChart>
  );
};

StarshipRadarChart.propTypes = {
  starshipData: PropTypes.object.isRequired,
  allStarshipsData: PropTypes.array.isRequired,
};

export default StarshipRadarChart;
