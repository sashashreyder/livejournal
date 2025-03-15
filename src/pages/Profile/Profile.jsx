import ProfileSettings from "./ProfileSettings";
import "../../styles/Profile.css"; // Импортируем стили из папки styles

function Profile() {
    return (
        <div className="profile-container">
            <h1>Profile Page</h1>
            <ProfileSettings />
        </div>
    );
}

export default Profile;

