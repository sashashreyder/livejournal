import { useState } from "react";

function BackgroundSettings() {
    const [background, setBackground] = useState(null);
    const [postBackground, setPostBackground] = useState(null);

    const handleBackgroundUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setBackground(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    const handlePostBackgroundUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setPostBackground(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <h3>Customize Backgrounds</h3>
            <div className="background-settings">
                <div>
                    <label>Upload Diary Background</label>
                    <input type="file" accept="image/*" onChange={handleBackgroundUpload} />
                    {background && <img src={background} alt="Diary Background" className="background-preview" />}
                </div>
                <div>
                    <label>Upload Post Background</label>
                    <input type="file" accept="image/*" onChange={handlePostBackgroundUpload} />
                    {postBackground && <img src={postBackground} alt="Post Background" className="background-preview" />}
                </div>
            </div>
        </div>
    );
}

export default BackgroundSettings;
