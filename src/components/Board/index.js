import React from 'react';
import styles from './index.module.css';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.board}>
        <div className={styles.dropHere}>Drop your files here.</div>
      </div>
    );
  }
}

export default Board;