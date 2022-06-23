import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    const missionsList = missions.map((mission) => (
      <div key={ mission.name }>
        <MissionCard
          name={ mission.name }
          year={ mission.year }
          country={ mission.country }
          destination={ mission.destination }
        />
      </div>
    ));
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missionsList}
      </div>
    );
  }
}

export default Missions;
