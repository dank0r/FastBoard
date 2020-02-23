import React from 'react';
import styles from './index.module.css';
import {Icon} from 'react-icons-kit';
import {chevronDown} from 'react-icons-kit/fa/chevronDown';

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
          <Icon size={10} className={styles.icon} icon={chevronDown} />
        </div>
      </div>
    );
  }
}

export default DropdownMenu;