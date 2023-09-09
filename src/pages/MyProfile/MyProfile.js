import RocketProfile from '../../components/RocketProfile/RocketProfile';
import MissionProfile from '../../components/MissionProfile/MissionProfile';
import './MyProfile.css';

const Profile = () => (
  <div className="main-profile-div">
    <div className="missions-profile-div">
      <MissionProfile />
    </div>
    <div className="rockets-profile-div">
      <div className="rocket-profile-div">
        <div>
          <RocketProfile />
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
