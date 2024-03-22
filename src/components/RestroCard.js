import {IMG_LINK_1} from "../utils/constants";
import {IMG_LINK_2} from "../utils/constants";
import {IMG_LINK_3} from "../utils/constants";



const RestroCard = (props) => {
    const {resData} = props;

    const {imgCode,
        altText,
        name,
        cuisines,
        avgRating,
        costForTwo,
        eta
    } = resData?.data // deconstructing assignment in JS
    return (        
            <div className="restro-card" style={{
                background: "#f0f0f0",
            }}>
                {/*Deconstructing assignment in JS */}
                <img src={IMG_LINK_1 + imgCode +IMG_LINK_2 + imgCode + IMG_LINK_3} alt= {altText} />
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h5>{avgRating} stars</h5>
                <h5>{costForTwo/100} Rupees for Two</h5>
                <h5>{eta} minutes</h5>

                {/* <img src={"https://images.pexels.com/photos/" + resData.data.imgCode + "/pexels-photo-" + resData.data.imgCode + ".jpeg?auto=compress&cs=tinysrgb&w=600"} alt= {resData.data.altText} />
                <h3>{resData.data.name}</h3>
                <h4>{resData.data.cuisines.join(", ")}</h4>
                <h5>{resData.data.avgRating} stars</h5>
                <h5>{resData.data.costForTwo/100} Rupees for Two</h5>
                <h5>{resData.data.eta} minutes</h5> */}
            </div>)
}

export default RestroCard;