import React from "react";
import {
  ArtistGroupSVG,
  ChartDecreaseSVG,
  ChartDownSVG,
  ChartGrowthSVG,
  ChartUpSVG,
} from "../SVG/DashboardSvg/CartCardSVG";

const ChartCard = ({ data }) => {
  return (
    <div className="py-4 px-6 bg-white rounded-[12px]">
      <div className="flex items-center gap-2">
        <span className="p-[13px] bg-[#F2F8FF] rounded-full">{data.icon}</span>
        <p className="text-[#637381]">{data.name}</p>
      </div>

      <div className="flex justify-between">
        <div>
          <p className="text-[32px] font-bold mt-2">{data.totalData}</p>
          <div className="flex items-center gap-1">
            <span
              className={`rounded-[4px] flex items-center gap-1 px-1 py-[2px] text-xs ${
                data.isGrowth
                  ? "text-[#0CAF60] bg-[#E6FDF2]"
                  : "text-[#E03137] bg-[#FCEAEB]"
              }`}
            >
              {data.isGrowth ? <ChartUpSVG /> : <ChartDownSVG />} {data.growth}
            </span>
            <p className="text-xs text-[#919EAB]">Last Month</p>
          </div>
        </div>

        <div className="self-end">
          {data.isGrowth ? <ChartGrowthSVG /> : <ChartDecreaseSVG />}
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
