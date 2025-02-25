import { useState } from "react";
import "../styles/Profile.css";

function Profile() {
    const [username, setUsername] = useState("User123");
    const [email, setEmail] = useState("user@example.com");
    const [avatar, setAvatar] = useState(null);
    const [isPrivate, setIsPrivate] = useState(false);
    const [newPassword, setNewPassword] = useState("");

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setAvatar(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    const handleChangePassword = () => {
        if (newPassword.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }
        console.log("New password:", newPassword);
        setNewPassword(""); 
    };

    return (
        <div className="profile-container">
            <h1>Profile Settings</h1>

            <div className="avatar-section">
                <label htmlFor="avatar-upload">
                    {avatar ? (
                        <img src={avatar} alt="Avatar" className="avatar" />
                    ) : (
                        <div className="avatar-placeholder">Upload Avatar</div>
                    )}
                </label>
                <input id="avatar-upload" type="file" onChange={handleFileUpload} hidden />
            </div>

            <div className="info-section">
                <p><strong>Username:</strong> {username}</p>
                <p><strong>Email:</strong> {email}</p>
            </div>

            <div className="password-section">
                <input 
                    type="password" 
                    placeholder="New Password" 
                    value={newPassword} 
                    onChange={(e) => setNewPassword(e.target.value)} 
                />
                <button onClick={handleChangePassword}>Change Password</button>
            </div>

            <div className="privacy-section">
                <label>
                    <input 
                        type="checkbox" 
                        checked={isPrivate} 
                        onChange={() => setIsPrivate(!isPrivate)} 
                    />
                    Make Profile Private
                </label>
            </div>
        </div>
    );
}

export default Profile;
