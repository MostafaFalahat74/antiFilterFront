import user from '../assets/images/images.png';
import Tur from '../assets/images/Tur.png';
import eng from '../assets/images/eng.png';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Header = ({ chgLanuage }) => {
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
            {/* <img src={eng} /> */}
            {/* <select>
                <option value={ <img src={eng} />} cvc> </option>
                <option value={ <img src={eng} />} ></option>
            </select> */}
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1"><img src={eng} /></Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>

        </div>
    </div>)
}
export default Header;