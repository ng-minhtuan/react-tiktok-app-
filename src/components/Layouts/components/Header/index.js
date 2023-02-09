import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountItems from '~/components/AccountItems';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([])
    }, 0)
  }, [])

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>

        <img src={images.logo} alt="Tiktok" />
        <Tippy
          interactive={true}
          placement='bottom'
          visible={searchResult.length > 0}
          render={attrs => (
            <div
              className={cx('search-results')}
              tabIndex="-1"
              {...attrs}
            >
              <PopperWrapper>
                <h4 className={cx('result-title')}>Acounts</h4>
                <AccountItems/>
                <AccountItems/>
                <AccountItems/>
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>

            <input
              placeholder='Search accounts and video'
              // Check chính tả
              spellCheck={false}
            />

            <button className={cx('clear-btn')}>
              {/* Clear */}
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>

            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />


            <button className={cx('search-btn')}>
              {/* Search Icon */}
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>

          </div>
        </Tippy>

        <div className={cx('action')}>
          <Button primary large>Log in</Button>
        </div>
      </div>
    </header>
  );

}

export default Header;