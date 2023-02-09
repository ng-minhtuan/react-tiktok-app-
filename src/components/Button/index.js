import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, primary = false,secondary = false, small = false,large = false, children, onClick, ...passProps }) {
  let TagNameButton = 'button';

  const props = {
    onClick,
    ...passProps
  };

  if (to) {
    props.to = to;
    TagNameButton = Link;
  } else if (href) {
    props.href = href;
    TagNameButton = 'a';
  }

  const classes = cx('wrapper', {
    primary,
    secondary,
    small,
    large,
  });

  return (
    <TagNameButton
      className={classes}
      {...props}
    >
      <span>{children}</span>
    </TagNameButton>
  );
}

export default Button;