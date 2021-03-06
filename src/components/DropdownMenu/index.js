import React from 'react';
import styles from './index.module.css';
import {Icon} from 'react-icons-kit';
import {ic_keyboard_arrow_down} from 'react-icons-kit/md/ic_keyboard_arrow_down';

class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let {name} = this.props;
    return (
      <div {...this.props} className={`${this.props.className} ${styles.wrapper}`}>
        <div {...this.props} className={`${styles.menu}`}>
          {name}
          <Icon size={17} className={styles.icon} icon={ic_keyboard_arrow_down} />
        </div>
      </div>
    );
  }
}

export default DropdownMenu;