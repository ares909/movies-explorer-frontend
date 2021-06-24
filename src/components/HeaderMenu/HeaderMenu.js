import NavTab from '../NavTab/NavTab';
import AccountTab from '../AccountTab/AccountTab';
import cross from '../../images/HeaderMenu/HeaderMenu__cross.svg'

function HeaderMenu() {
  return (
    <div className='HeaderMenu'>
      <div className='headerMenu__menu-container'>
        <NavTab></NavTab>
        <AccountTab></AccountTab>
      </div>
      <button className='headerMenu__cross-button'><img className='headerMenu__cross hover'src={cross} alt='крестик' /></button>
    </div>
  );
}

export default HeaderMenu;
