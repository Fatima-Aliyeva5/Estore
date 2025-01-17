import React from "react";
import "./Banner.scss";
const Banner = () => {
  return (
    <div className="banner">
      <h3>Shop by Category</h3>
      <div className="row ">
        <div className="col-lg-4">
          <div className="box box-1"><h4>Owmen`s</h4></div>
        </div>
        <div className="col-lg-4" >
          <div className="box box-2"><h4>Winter Cloth</h4></div>
        </div>
        <div className="col-lg-4 ">
          <div className="box box-3"><h4>Man`s Cloth</h4></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
