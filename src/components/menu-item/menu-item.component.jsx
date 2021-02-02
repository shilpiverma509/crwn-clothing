import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({title,image,size})=>{
  const ImageClass = size!== undefined? `${size} menu-item`: "menu-item";
  const CapitalizeTitle= `${title}`.charAt(0).toUpperCase()+`${title}`.slice(1)
  return (
  <div
    className={ImageClass}
    style= {{
      backgroundImage:`url(${image})`
      }}
    >
      <div
       style= {{
        backgroundImage:`url(${image})`
        }}
        className="background-image"
      >
      <div className="content">
        <h1 className="title">{CapitalizeTitle}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
      </div>

  </div>      
)
}

export default MenuItem;