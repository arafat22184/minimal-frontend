import React, { useState } from "react";
import profilePicture from "../../assets/dashboard/profilePicture.svg";
import ProfileEditBtnSVG from "../../components/SVG/DashboardSvg/ProfileSVG/ProfileEditBtnSVG";
import ProfileArrowButtonSVG from "../../components/SVG/DashboardSvg/ProfileSVG/ProfileArrowButtonSVG";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import ChangePasswrodModal from "../../components/Modal/ChangePasswrodModal";

const Profile = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const user = {
    name: "DJ Nova",
    stageName: "DJ Nova",
    artistType: "Singer",
    agent: "Sarah Lee",
    email: "estherhoward@gmail.com",
    phoneNumber: "+1 234 567 890",
    companyAddress:
      "245 Greenfield Avenue, Apartment 12B, New York, 10001, United States",
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Log Out",
      text: "Are you sure you want to Log out from this account? ",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log Out",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
        Swal.fire({
          title: "Logged Out!",
          text: "You have been successfully logged out.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="mt-[38px] ml-4">
      {/* Basic Details */}
      <div className="flex items-center gap-[35px]">
        <img src={profilePicture} alt={`${user.name} picture`} />
        <div>
          <h5 className="text-[32px] font-semibold">{user.name}</h5>
          <p className="text-[#637381]">{user.email}</p>
        </div>
      </div>

      {/* Personal Information Title */}
      <div className="flex justify-between items-center mt-[35px] pb-1 border-b border-[#DFE3E8]">
        <h4 className="text-xl font-semibold">Personal Information</h4>
        <span className="text-[#2094F3] font-medium flex items-center gap-2">
          <ProfileEditBtnSVG /> Edit
        </span>
      </div>
      {/* Personal Details */}
      <div className="mt-8 mb-12 space-y-6">
        {/* Part-1 */}
        <div className="grid grid-cols-4">
          {/* Name */}
          <div className="space-y-2">
            <p className="text-[#637381]">Full name</p>
            <p className="text-[#37404A] font-semibold text-lg">{user.name}</p>
          </div>

          {/*Stage Name */}
          <div className="space-y-2">
            <p className="text-[#637381]">Stage name</p>
            <p className="text-[#37404A] font-semibold text-lg">
              {user.stageName}
            </p>
          </div>

          {/*Artist type */}
          <div className="space-y-2">
            <p className="text-[#637381]">Artist type</p>
            <p className="text-[#37404A] font-semibold text-lg">
              {user.artistType}
            </p>
          </div>

          {/*Artist type */}
          <div className="space-y-2">
            <p className="text-[#637381]">Artist type</p>
            <p className="text-[#37404A] font-semibold text-lg">
              {user.artistType}
            </p>
          </div>
        </div>

        {/* Part-2 */}
        <div className="grid grid-cols-4">
          {/* Agent */}
          <div className="space-y-2">
            <p className="text-[#637381]">Agent</p>
            <p className="text-[#37404A] font-semibold text-lg">{user.agent}</p>
          </div>

          {/*Artist type */}
          <div className="space-y-2">
            <p className="text-[#637381]">Email</p>
            <p className="text-[#37404A] font-semibold text-lg">
              {user.phoneNumber}
            </p>
          </div>

          {/*Artist type */}
          <div className="space-y-2 col-span-2">
            <p className="text-[#637381]">Artist type</p>
            <p className="text-[#37404A] font-semibold text-lg">
              {user.companyAddress}
            </p>
          </div>
        </div>
      </div>

      {/* Account Security */}
      <div className="mt-12 space-y-6">
        <h4 className="text-xl font-semibold pb-1 border-b border-[#DFE3E8] mt-2">
          Account Security
        </h4>

        {/* Log out button */}
        <button
          onClick={handleLogout}
          className="flex items-center justify-between w-full px-6 py-4.5 border border-[#DFE3E8] rounded-[12px] hover:bg-red-100 cursor-pointer"
        >
          <span>Log Out</span>
          <ProfileArrowButtonSVG />
        </button>

        {/* Change Password button */}
        <button
          onClick={() => setOpenModal(!openModal)}
          className="flex items-center justify-between w-full px-6 py-4.5 border border-[#DFE3E8] rounded-[12px] hover:bg-green-100 cursor-pointer"
        >
          <span>Change Password</span>
          <ProfileArrowButtonSVG />
        </button>

        {/* Delete Account button */}
        <button className="flex items-center justify-between w-full px-6 py-4.5 border border-[#DFE3E8] rounded-[12px] hover:bg-red-500 hover:text-white cursor-pointer">
          <span>Delete Account</span>
          <ProfileArrowButtonSVG />
        </button>
      </div>

      {/* Modal for change Password */}
      {openModal && (
        <ChangePasswrodModal
          setOpenModal={setOpenModal}
          openModal={openModal}
        />
      )}
    </div>
  );
};

export default Profile;
