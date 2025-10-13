import React from "react";

const RiderInformation = ({ riderInfo }) => {
  return (
    <div>
      <h3 className="font-semibold text-xl mb-2">Rider Information</h3>
      <hr />

      <div className="space-y-6">
        {/* Technical Rider */}
        <div className="mt-6">
          <h4 className="text-lg font-medium">Technical Rider</h4>
          <ul className="mt-3 list-disc space-y-2">
            {riderInfo?.technicalRider.map((tr) => (
              <li className="text-[#637381] ml-6">{tr}</li>
            ))}
          </ul>
        </div>

        {/* Hospitality Rider */}
        <div className="mt-6">
          <h4 className="text-lg font-medium">Technical Rider</h4>
          <ul className="mt-3 list-disc space-y-2">
            {riderInfo?.hospitality.map((hstlity) => (
              <li className="text-[#637381] ml-6">{hstlity}</li>
            ))}
          </ul>
        </div>
        {/* Note */}
        <div className="mt-6">
          <h4 className="text-lg font-medium">Note</h4>
          <p className="text-[#637381] mt-3">{riderInfo.note}</p>
        </div>
      </div>
    </div>
  );
};

export default RiderInformation;
