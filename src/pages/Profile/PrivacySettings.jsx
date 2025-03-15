import { useState } from "react";

function PrivacySettings() {
    const [privacy, setPrivacy] = useState("everyone");

    return (
        <div>
            <h3>Privacy Settings</h3>
            <label>Who can see your diary?</label>
            <select value={privacy} onChange={(e) => setPrivacy(e.target.value)}>
                <option value="everyone">Everyone</option>
                <option value="friends">Only Friends</option>
                <option value="users">Only Registered Users</option>
            </select>
        </div>
    );
}

export default PrivacySettings;
