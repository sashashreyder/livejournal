import { useState } from "react";

function AccountSettings() {
    const [username, setUsername] = useState("UserName");
    const [email, setEmail] = useState("user@example.com");
    const [newPassword, setNewPassword] = useState("");

    return (
        <div>
            <h3>Account Settings</h3>
            <label>Change Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

            <label>Change Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label>Change Password</label>
            <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        </div>
    );
}

export default AccountSettings;
