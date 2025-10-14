import React, { useState } from "react";
import { toast } from "react-toastify";

const ChangePasswrodModal = ({ setOpenModal }) => {
  const [isRequMeet, setIsRequMeet] = useState(true);

  const handleOverlayClick = () => {
    setOpenModal(false);
  };

  const handleFormClick = (e) => {
    e.stopPropagation();
  };

  const handleFromSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const currentPass = form.currentPass.value;
    const newPass = form.newPass.value;
    const confirmPass = form.confirmPass.value;

    // Regex:
    const hasUppercase = /[A-Z]/;
    const hasLowercase = /[a-z]/;
    const hasNumber = /\d/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>_-]/;

    if (
      currentPass.length < 8 ||
      newPass.length < 8 ||
      confirmPass.length < 8
    ) {
      setIsRequMeet(false);
      toast.error("At least 8 characters long", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    } else if (!hasUppercase.test(newPass) || !hasUppercase.test(confirmPass)) {
      setIsRequMeet(false);
      toast.error("Must include at least one uppercase letter", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    } else if (!hasLowercase.test(newPass) || !hasLowercase.test(confirmPass)) {
      setIsRequMeet(false);
      toast.error("Must include at least one lowercase letter", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    } else if (!hasNumber.test(newPass) || !hasNumber.test(confirmPass)) {
      setIsRequMeet(false);
      toast.error("Must include at least one number", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    } else if (
      !hasSpecialChar.test(newPass) ||
      !hasSpecialChar.test(confirmPass)
    ) {
      setIsRequMeet(false);
      toast.error("Must include at least one special character", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    } else {
      setIsRequMeet(true);
      setOpenModal(false);
      toast.success("Password Updated Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="w-screen h-screen backdrop-blur-[3px] absolute z-30 top-0 left-0 flex justify-center items-center"
    >
      <form
        onClick={handleFormClick}
        onSubmit={handleFromSubmit}
        className="w-[816px] rounded-2xl p-8 bg-white space-y-6"
      >
        {/* Current Password */}
        <div className="flex flex-col w-full gap-2">
          <label
            className="text-[#637381] font-medium"
            htmlFor="Current password"
          >
            Current Password
          </label>
          <input
            type="password"
            className="text-lg placeholder-black w-full rounded-[8px] px-4 py-2 border border-[#DFE3E8]"
            placeholder="Enter Current Password"
            name="currentPass"
          />
        </div>

        {/* New Password */}
        <div className="flex flex-col w-full gap-2">
          <label
            className="text-[#637381] font-medium"
            htmlFor="Current password"
          >
            New Password
          </label>
          <input
            type="password"
            className="text-lg placeholder-black w-full rounded-[8px] px-4 py-2 border border-[#DFE3E8]"
            placeholder="New Password"
            name="newPass"
          />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col w-full gap-2">
          <label
            className="text-[#637381] font-medium"
            htmlFor="Current password"
          >
            Confirm Password
          </label>
          <input
            type="password"
            className="text-lg placeholder-black w-full rounded-[8px] px-4 py-2 border border-[#DFE3E8]"
            placeholder="Confirm Password"
            name="confirmPass"
          />
        </div>

        {/* Password Requirements */}
        <div className="p-6 bg-[#F4F6F8] rounded-2xl space-y-3">
          <p className="text-lg">Password Requirements</p>
          <ul
            className={`list-disc pl-6 ${
              isRequMeet ? "text-[#637381]" : "text-red-500"
            }`}
          >
            <li>At least 8 characters long</li>
            <li>Contains uppercase and lowercase letters</li>
            <li>Includes at least one number</li>
            <li>Contains at least one special character</li>
          </ul>
        </div>

        <input
          type="submit"
          className="w-full rounded-[8px] py-3 text-white bg-[#3F97FF] font-semibold cursor-pointer hover:bg-[#5ea5fc]"
          value="Update Password"
        />
      </form>
    </div>
  );
};

export default ChangePasswrodModal;
