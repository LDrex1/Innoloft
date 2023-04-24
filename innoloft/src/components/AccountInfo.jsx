import React from "react";
import { RiHome2Line } from "react-icons/ri";
import { MdPeopleOutline } from "react-icons/md";
import { CiVirus } from "react-icons/ci";
import ProfilePic from "./custom/ProfilePic";
const MainAccountInfo = ({ firstname, lastName, profilePicture, company }) => (
  <div className="flex items-center">
    <ProfilePic
      profilePicture={profilePicture || company?.logo}
      size="w-12 h-12"
    />
    <div className="ms-3">
      <h4>
        {firstname} {lastName}
      </h4>
      <h6>{company?.name}</h6>
    </div>
  </div>
);
function AccountInfo({ user, company }) {
  const { id, email, firstName, lastName, profilePicture } = user || {};
  return (
    <>
      {user && (
        <div className="p-3">
          <MainAccountInfo
            firstName={firstName}
            lastName={lastName}
            profilePicture={profilePicture}
          />
          <ul className="mt-4">
            <li className="flex py-2 items-center">
              <RiHome2Line />
              <span className="ps-2">Home</span>
            </li>
            <li className="flex py-2 items-center">
              <MdPeopleOutline />
              <span className="ps-2">Members</span>
            </li>
            <li className="flex py-2 items-center">
              <CiVirus />
              <span className="ps-2">Organizations</span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export { MainAccountInfo };
export default AccountInfo;
