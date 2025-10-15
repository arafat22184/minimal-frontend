import { NavLink } from "react-router";
import HomeIconSVG from "../SVG/DashboardSvg/HomeIconSVG";
import AssistanceSVG from "../SVG/DashboardSvg/AssistanceSVG";
import ProfileSVG from "../SVG/DashboardSvg/ProfileSVG";
import LogoSVG from "../SVG/DashboardSvg/LogoSVG";
import InimalSVG from "../SVG/DashboardSvg/InimalSVG";

export const Sidebar = () => {
  const navLinkStyle =
    "flex gap-4 items-center pl-5 pr-22.5 py-2.5 rounded-[8px] hover:bg-[#75b2fc] hover:text-white";
  return (
    <div className="px-4 py-8">
      {/* Logo */}
      <div className="flex gap-2 items-center min-w-40">
        <LogoSVG></LogoSVG>
        <InimalSVG></InimalSVG>
      </div>
      {/* Navigations */}
      <div className="mt-10 space-y-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${navLinkStyle} ${
              isActive ? "bg-[#3F97FF] text-white" : "text-[#637381]"
            }`
          }
        >
          <HomeIconSVG />
          Dashboard
        </NavLink>
        <NavLink
          to={"/assistant"}
          className={({ isActive }) =>
            `${navLinkStyle} ${
              isActive ? "bg-[#3F97FF] text-white" : "text-[#637381]"
            }`
          }
        >
          <AssistanceSVG></AssistanceSVG>
          Ai Assistant
        </NavLink>
        <NavLink
          to={"/profile"}
          className={({ isActive }) =>
            `${navLinkStyle} ${
              isActive ? "bg-[#3F97FF] text-white" : "text-[#637381]"
            }`
          }
        >
          <ProfileSVG></ProfileSVG>
          Profile
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `${navLinkStyle} ${
              isActive ? "bg-[#3F97FF] text-white" : "text-[#637381]"
            }`
          }
        >
          <HomeIconSVG />
          Dashboard-2
        </NavLink>
      </div>
    </div>
  );
};
