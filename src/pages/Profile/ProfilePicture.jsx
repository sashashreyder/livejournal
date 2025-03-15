import { useState } from "react";

function ProfilePicture() {
    const [avatar, setAvatar] = useState(null);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setAvatar(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <h3>Change Profile Picture</h3>
            <input type="file" accept="image/*" onChange={handleFileUpload} />
            {avatar ? (
                <img src={avatar} alt="Avatar" className="avatar" />
            ) : (
                <div className="avatar-placeholder">No Image</div>
            )}
        </div>
    );
}

export default ProfilePicture;
