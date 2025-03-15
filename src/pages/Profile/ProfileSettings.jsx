import { useState } from "react";
import ProfilePicture from "./ProfilePicture";
import BackgroundSettings from "./BackgroundSettings";
import PrivacySettings from "./PrivacySettings";
import AccountSettings from "./AccountSettings";
import "../../styles/Profile.css"; // Стили профиля

function ProfileSettings() {
    const [activeTab, setActiveTab] = useState("profile");

    return (
        <div className="settings-container">
            {/* Sidebar menu */}
            <div className="settings-menu">
                <h2>Settings</h2>
                <ul>
                    <li onClick={() => setActiveTab("profile")} className={activeTab === "profile" ? "active" : ""}>
                        Profile Picture
                    </li>
                    <li onClick={() => setActiveTab("background")} className={activeTab === "background" ? "active" : ""}>
                        Background Settings
                    </li>
                    <li onClick={() => setActiveTab("privacy")} className={activeTab === "privacy" ? "active" : ""}>
                        Privacy Settings
                    </li>
                    <li onClick={() => setActiveTab("account")} className={activeTab === "account" ? "active" : ""}>
                        Account Settings
                    </li>
                </ul>
            </div>

            {/* Dynamic content */}
            <div className="settings-content">
                {activeTab === "profile" && <ProfilePicture />}
                {activeTab === "background" && <BackgroundSettings />}
                {activeTab === "privacy" && <PrivacySettings />}
                {activeTab === "account" && <AccountSettings />}
            </div>
        </div>
    );
}

export default ProfileSettings;
