
import React from "react";
import Style from "../styles/attendeeCard.css"


function attendeeCard(props) {
  return (
    <div className="max-w-sm rounded overflow-hidden mb-1 py-1">
      <div className="grid grid-cols-6 gap-1 shadow-md rounded-full attendee-color font-white">
        <div className="col-span-1">
          <img
            alt=""
            src={props.attendee.profileURL}
            className="rounded-full h-10 p-1"
          />
        </div>
        <div className="col-span-5 flex items-center justify-center font-bold">
          {props.attendee.firstName} {props.attendee.lastName}
        </div>
      </div>
    </div>
  );
}

export default attendeeCard;
