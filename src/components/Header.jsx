import user from '../assets/images/images.png'

const Header = ({chgLanuage}) => {
    return (<div className="header">
        <div className="header-login-btn">
            <span>ورود به بخش کاربری</span>
            <button onClick={chgLanuage}>cng</button>
        </div>
        <div className="header-menu">
            <span>فاکس اسپید</span>
            <span>خرید سرویس</span>
            <span>آموزش</span>
        </div>
        <div className="header-user-img">
            <img src={user} />
        </div>
    </div>)
}
export default Header;