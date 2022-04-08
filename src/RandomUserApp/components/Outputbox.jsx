import React from "react";
import { useCountRenders } from "../custom_hooks/useCountRenders";

const Outputbox = React.memo(({usersData}) => {
  useCountRenders("Output");
  const u = usersData.results[0];
  return (
    <div className="below-input-box">

      <figure className="img-prof">
        <img
          src={u.picture.large}
          className
          alt="USER-PROFILE"
        />
      </figure>

      <div className="user-info-card">
          <div className="user-name user-details head-text">
            <i className="fas fa-user"></i>
            {` ${u.name.title} ${u.name.first} ${u.name.last}`}
          </div>
          <div className="user-details head-text">
            <i className="fas fa-map-marker-alt"></i>
            {` ${u.location.street.name} ${u.location.street.number}, ${u.location.city}, ${u.location.state} ${u.location.postcode} ${u.location.country}`}
          </div>
          <div className="user-details head-text">
            <i className="fas fa-envelope"></i>
            {` ${u.email}`}
          </div>
          <div className="user-details head-text">
            <i className="fas fa-phone-alt"></i>
            {` ${u.phone}`}
          </div>
        </div>
    </div>
  );
});
export default Outputbox;
