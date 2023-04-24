import React from "react";
import Profilepic from "../../assets/profil_1.png";

function ProfilePic({ size, profilePicture }) {
  return (
    <div
      className={`${size || "w-8 h-8"} overflow-hidden bg-black rounded-full`}
    >
      <img
        className="object-cover"
        src={profilePicture}
        alt="profile picture"
      />
    </div>
  );
}

export default ProfilePic;
