import React from 'react';
import SearchInput from '../SearchInput';
import DropdownMenu from '../DropdownMenu';
import AccountMenu from '../AccountMenu';
import styles from './index.module.css';

class Room extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.room}>
        <div className={styles.mainMenu}>
          <div className={styles.logo} />
          <DropdownMenu className={styles.dropdownMenu} name="Room"/>
          <SearchInput className={styles.search} placeholder="Search" />
          <AccountMenu className={styles.accountMenu} username="dank0r" />
        </div>
        <div className={styles.container}>
          <div className={styles.sidebar}></div>
          <div className={styles.board} />
        </div>
      </div>
    );
  }
}

export default Room;