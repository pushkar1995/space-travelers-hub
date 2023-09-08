import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissionAsync, joiningMission } from '../../redux/missionSlice';
import './Missions.css';

function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const status = useSelector((state) => state.missions.status);
  const error = useSelector((state) => state.missions.error);

  useEffect(() => {
    dispatch(fetchMissionAsync());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody className="border border-gray-300">
        {missions.map((mission) => (
          <tr key={mission.mission_id}>
            <td>{mission.mission_name}</td>
            <td>{mission.description}</td>
            <td><p style={{ backgroundColor: mission.reserved ? '#419bf9' : '#6d757d' }}>{mission.reserved ? 'ACTIVE MEMBER' : 'NOT A MEMBER'}</p></td>
            <td>
              <button
                type="button"
                style={{ color: mission.reserved ? 'red' : '', border: mission.reserved ? '1px solid red' : '' }}
              >
                Leave Mission
              </button>
              <button
                type="button"
                style={{ color: mission.reserved ? 'red' : '', border: mission.reserved ? '1px solid red' : '' }}
                onClick={() => dispatch(joiningMission(mission.mission_id))}
              >
                Join Mission
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Missions;
