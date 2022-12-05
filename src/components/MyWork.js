import React from "react";
import { NavLink } from "react-router-dom";
import Mywork from "../API/Mywork";
import "../Css/mywork.css";
export const MyWork = () => {
  const mIn = (index)=>{
   const btn = document.getElementById(`btn-${index}`)
   btn.style.height="100%"
  }
  const mOut = (index)=>{
    const btn = document.getElementById(`btn-${index}`)
    btn.style.height="0"
   }
  return (
    <>
        <section className="mywork">
          <h1>Frontend projects</h1>
          {Mywork.map((curr, index) => {
            return (
              <>
                <div className='p-card' key={index} onMouseEnter={()=>{mIn(index)}} >
                  <img src={curr.img} alt="" />
                    <h3>{curr.project_name}</h3>
                    <a href={curr.git_hub_link} id={`btn-${index}`} onMouseOut={()=>{mOut(index)}} className="p-view">Live Demo</a>
                </div>
              </>
            );
          })}
          <h1>Backend project</h1>
        </section>
    </>
  );
};
