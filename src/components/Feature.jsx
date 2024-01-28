import { IoSpeedometerOutline } from "react-icons/io5";
const Feature = ({title , describe}) => {
    return (<div className="feature">
        <div className="feature-item">
            <IoSpeedometerOutline size={60} color="blue" />
            <span className="feature-item-title">{title}</span>
            <span className="feature-item-description">{describe}</span>
        </div>
    </div>)
}
export default Feature;