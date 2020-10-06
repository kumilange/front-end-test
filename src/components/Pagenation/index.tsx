import React from 'react';
import styles from './Pagenation.module.scss';
import { UPDATE_PAGE } from '../../reducer';
import { Props } from '../../types';

const Pagenation = ({ eqs, state: { eqsIndex }, dispatch }: Props) => (
  <ol className={styles.pagenation}>
    {eqs.map((_: any, index: number) => (
      <li
        key={`${eqsIndex}${index}`}
        onClick={() => {
          dispatch({
            type: UPDATE_PAGE,
            payload: { eqsIndex: index },
          });
        }}
        className={`${styles.list} ${eqsIndex === index && styles.active}`}
      >
        <button>{index + 1}</button>
      </li>
    ))}
  </ol>
);

export default Pagenation;
