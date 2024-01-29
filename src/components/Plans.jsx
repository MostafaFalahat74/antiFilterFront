import { LuCheck } from "react-icons/lu";
const Plans = () => {
    return (<div className="plans">
        <div className="plans-title">
            <span>لیست پکیج های VPN</span>
            <span>Stunnel - Tunnelplus - Cisco - Openvpn - SSH</span>
        </div>
        <div className="plans-content">
            <div className="plan">
                <div className="plan-title">
                    <span className="plan-month">1 ماهه</span>
                    <span  className="plan-user">1 کاربره</span>
                </div>
                <div className="plan-price">
                    <span>تومان100,000</span>
                </div>
                <span>دو کاربر همزمان <LuCheck /></span>
                <span> vpn با آی پی ثابت اختصاصی<LuCheck /></span>
                <span>فوق العاده سریع و ایمن<LuCheck /></span>
                <span>قابلیت تمدید<LuCheck /></span>
                <span> بدون محدودیت زمانی در اولین اتصال<LuCheck /></span>
                <span>پشتیبانی از تمامی دستگاه ها<LuCheck /></span>
                <span>اس اس ال سکوریتی 2048 بیتی<LuCheck /></span>
                <span>امکان بازگشت وجه ( به شرط عدم اتصال اولیه)<LuCheck /></span>
                <div className="plan-btn">
                    <span>خرید اشتراک</span>
                </div>
            </div>
            <div className="plan">
                <div className="plan-title">
                    <span className="plan-month">1 ماهه</span>
                    <span  className="plan-user">1 کاربره</span>
                </div>
                <div className="plan-price">
                    <span>تومان100,000</span>
                </div>
                <span>دو کاربر همزمان <LuCheck /></span>
                <span> vpn با آی پی ثابت اختصاصی<LuCheck /></span>
                <span>فوق العاده سریع و ایمن<LuCheck /></span>
                <span>قابلیت تمدید<LuCheck /></span>
                <span> بدون محدودیت زمانی در اولین اتصال<LuCheck /></span>
                <span>پشتیبانی از تمامی دستگاه ها<LuCheck /></span>
                <span>اس اس ال سکوریتی 2048 بیتی<LuCheck /></span>
                <span>امکان بازگشت وجه ( به شرط عدم اتصال اولیه)<LuCheck /></span>
                <div className="plan-btn">
                    <span>خرید اشتراک</span>
                </div>
            </div>
        </div>
    </div>)
}
export default Plans;