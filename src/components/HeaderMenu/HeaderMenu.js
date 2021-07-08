import NavTab from '../NavTab/NavTab';
import AccountTab from '../AccountTab/AccountTab';
import cross from '../../images/HeaderMenu/HeaderMenu__cross.svg';

function HeaderMenu({ isOpened, hadleCloseMenu, loggedIn }) {
  const className = `HeaderMenu ${isOpened ? 'HeaderMenu_active' : ''}`;

  return (
    <div className={className}>
      <div className='headerMenu__menu-container'>
        <NavTab hadleCloseMenu={hadleCloseMenu} loggedIn={loggedIn}></NavTab>
        <AccountTab hadleCloseMenu={hadleCloseMenu} loggedIn={loggedIn}></AccountTab>
      </div>
      <button onClick={hadleCloseMenu} className='headerMenu__cross-button'>
        <img className='headerMenu__cross hover' src={cross} alt='крестик' />
      </button>
    </div>
  );
}

export default HeaderMenu;
