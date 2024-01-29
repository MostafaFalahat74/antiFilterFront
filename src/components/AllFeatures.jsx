import features from "../assets/featuresData";
import Feature from './Feature';
const AllFeatures=()=>{
 console.log(features);
    return(<div className="feature">
        {  features.map((feature , index)=>  <Feature title={feature.title} describe={feature.describe} key={index}/>)}  
     

       

</div>)}
export default AllFeatures;