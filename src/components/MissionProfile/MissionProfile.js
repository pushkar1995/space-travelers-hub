import React from 'react';
import { useSelector } from 'react-redux';
import '../../pages/MyProfile/MyProfile.css';

const MissionProfile = () => {
  const missions = useSelector((state) => state.missions.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved);

  return (
    <div>
      <h2>My Missions</h2>
      <table className="rocket-profile-table">
        <tbody>
          {joinedMissions.length === 0 ? (
            <tr>
              <td className="no-rocket-placeholder">No Missions Added</td>
            </tr>
          ) : (
            joinedMissions.map((mission) => (
              <tr key={mission.id}>
                <td>{mission.mission_name}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MissionProfile;
