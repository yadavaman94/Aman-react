import { CDN_URL } from "../utils/constants";

const stylecard = {
  backgroundColor: "pink",
};
const Restaurantcard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo } = resData?.info;
  return (
    <div className="res-card" style={stylecard}>
      <img
        className="image-logo"
        alt="img-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default Restaurantcard;
