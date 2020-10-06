import React from 'react';
import styles from './Table.module.scss';
import { UPDATE_TABLE_MAP } from '../../reducer';
import { EqObject, Props } from '../../types';

const Table = ({ eqs, state: { eqsIndex, selectedId }, dispatch }: Props) => {
  const handleTdClick = (event: React.MouseEvent<HTMLTableElement>) => {
    const table = event.target as HTMLElement;
    if (table.tagName !== 'TD' || !table.parentElement) return;

    dispatch({
      type: UPDATE_TABLE_MAP,
      payload: {
        selectedId: table.parentElement.dataset.id,
        selectedIndex: table.parentElement.dataset.index,
      },
    });
  };

  return (
    <>
      <table className={styles.table} onClick={handleTdClick}>
        <thead>
          <tr>
            <th>Place</th>
            <th className={styles.numberVal}>Mag</th>
            <th className={styles.numberVal}>Depth</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {eqs.length > 0 &&
            eqs[eqsIndex!].map(
              ({ id, mag, place, time, depth }: EqObject, index: number) => {
                const trClass =
                  id === selectedId ? `${styles.highlight}` : undefined;

                return (
                  <tr
                    key={id}
                    className={trClass}
                    data-id={id}
                    data-index={index}
                  >
                    <td>{place}</td>
                    <td>{mag}</td>
                    <td>{depth}</td>
                    <td>{time}</td>
                  </tr>
                );
              }
            )}
        </tbody>
      </table>
    </>
  );
};

export default Table;
