import RocketProfile from '../../components/RocketProfile/RocketProfile';
import './MyProfile.css';

const Profile = () => (
  <div className="main-profile-div">
    <div className="missions-profile-div">
      <h2>My Missions</h2>
      <div className="content">Content</div>
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
