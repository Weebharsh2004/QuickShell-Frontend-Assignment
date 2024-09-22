import React from 'react';
import { FaExclamation, FaRegCircle } from "react-icons/fa";
import { VscWorkspaceUnknown } from "react-icons/vsc";
import { HiMiniUserCircle } from "react-icons/hi2";
import { TbProgress } from "react-icons/tb";
import './Card.css';

const statusIcons = {
  todo: <FaRegCircle className="status-icon todo" aria-label="To Do" />,
  backlog: <VscWorkspaceUnknown className="status-icon backlog" aria-label="Backlog" />,
  inProgress: <TbProgress className="status-icon in-progress" aria-label="In Progress" />
};

const Card = ({ id, title, tag = [], status }) => {
  const statusKey = status.toLowerCase();
  const statusIcon = statusIcons[statusKey] || statusIcons.inProgress;

  return (
    <div className="cardContainer flex-gap-10" style={{ gap: '5px', marginBottom: "20px" }}>
      <div className="cardHeading flex-sb">
        <span className='color-grey' style={{ textTransform: "uppercase" }}>{id}</span>
        <div className="relative">
          <HiMiniUserCircle style={{ width: "30px", height: "30px" }} color="#81D4FA" />
        </div>
      </div>
      <div className="cardTitle" style={{ fontWeight: 200 }}>
        <p>
          {statusIcon}
          {"  " + title}
        </p>
      </div>
      <div className="cardTags">
        <div className="tags color-grey">
          <FaExclamation style={{ background: "grey", padding: "2px", color: "white" }} />
        </div>
        {tag.map((elem, index) => (
          <div key={index} className="tags color-grey">
            <span>•</span> {elem}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
