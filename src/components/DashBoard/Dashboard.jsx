import React from "react";
import { useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import { HiMiniUserCircle } from "react-icons/hi2";
import { GrTask } from "react-icons/gr";
import "./Dashboard.css";
import Card from "../Card/Card";

const DashView = () => {
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );

  return (
    selectedData && (
      <div className="dashContainer" >
        {selectedData.map((elem, index) => {
          return (
            <div className="container">
              <div key={index} className="dashCardContainer">
                <div className="dashCardHeading flex-sb">
                  <div className="leftView">
                    {!user ? (
                      <GrTask style={{color:"orangeRed" }}/>
                    ) : (
                      <>
                        <div
                          className="relative"
                          style={{ width: "15px", height: "15px", display : 'inline-block' }}
                        >
                         <HiMiniUserCircle />
                        </div>
                      </>
                    )}
                    <span style={{paddingLeft:"15px"}}>
                      {" "}
                      <span style={{fontWeight:"700"}}>{elem[index]?.title}</span> {elem[index]?.value?.length}
                    </span>
                  </div>
                  <div className="rightView">
                    <AiOutlinePlus style={{cursor:"pointer"}}/>{" "}
                    <p style={{ letterSpacing: "2px" ,paddingLeft:"15px" ,cursor:"pointer"}}>...</p>
                  </div>
                </div>
                <div className="dashList ">
                  {elem[index]?.value?.map((elem, index) => {
                    return (
                      <Card id={elem.id} title={elem.title} tag={elem.tag} status={elem.status}/>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default DashView;
