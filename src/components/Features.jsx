import { IoSpeedometerOutline } from "react-icons/io5";
const Features = () => {
    return (<div className="features">
        <div className="feature-item">
            <IoSpeedometerOutline size={60} color="blue"/>
            <span className="feature-item-title">3 روز ضمانت بازگشت وجه</span>
            <span className="feature-item-description">درصورت عدم رضایت از سرویس، وجه پرداختی شما بازگشت داده میشود</span>
        </div>
        <div className="feature-item">
            <IoSpeedometerOutline size={60} color="blue"/>
            <span className="feature-item-title">پشتیبانی فنی 24/7/365</span>
            <span className="feature-item-description">تیم پشتیبانی ما در هر ساعتی از شبانه روز و در تمام روزهای سال آماده خدمت رسانی به مشتریان است</span> 
        </div>
        <div className="feature-item">
            <IoSpeedometerOutline size={60} color="blue"/>
            <span className="feature-item-title">سرعت بسیار بالا</span>
            <span className="feature-item-description">با استفاده از سرویس‌های ما، هیچگونه کاهش سرعتی در اینترنت شما به وجود نمی‌آید</span>
        </div>
    </div>)
}
export default Features;