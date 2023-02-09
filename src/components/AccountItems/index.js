import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from './AccountItems.module.scss';

const cx = classNames.bind(styles);

function AccountItems() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar-account')} 
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/da724096944f09fac287d2e68a8b1300~c5_100x100.jpeg?x-expires=1676095200&x-signature=rjZyXMd2%2B5f6YH11%2BJUL3u248pY%3D"
        alt=" " 
      />
      <div className={cx('info-account')}>
        <h4 className={cx('name-account')}>
          <span>abc</span>
          <FontAwesomeIcon className={cx('icon-check-account')} icon={faCheckCircle} />
        </h4>
        <span className={cx('usename-account')}>xyz</span>
      </div>

    </div>
  );
}

export default AccountItems;