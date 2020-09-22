import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
const Header = () => {
  return (
    <div className='header'>
      <img
        className='header__logo'
        src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
        alt=''
      />
      <div className='header__search'>
        <input className='header__searchInput' type='text' />
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className='header__nav'>
        <div className='header__option'>
          <span className='header__optionLineOne'> Hello Giri</span>
          <span className='header__optionLineTwo'> Sign In</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'> Hello Giri</span>
          <span className='header__optionLineTwo'> Sign In</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'> Hello Giri</span>
          <span className='header__optionLineTwo'> Sign In</span>
        </div>
      </div>
    </div>
  );
};
export default Header;
