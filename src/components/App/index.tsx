import React, { useReducer } from 'react';
import Map from '../Map';
import Table from '../Table';
import Pagenation from '../Pagenation';
import useAsyncEqData from '../../hooks/useAsyncEqData';
import { formatDateToDash } from '../../utils';
import { initialState, reducer } from '../../reducer';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import styles from './App.module.scss';
import 'react-day-picker/lib/style.css';
import { ActionType } from '../../types';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [eqs] = useAsyncEqData(state.selectedDate!);

  return (
    <main className={styles.container}>
      <div className={`${styles.wrapper} ${styles.pad}`}>
        <div className={styles.headingWrapper}>
          <h1 className={styles.heading}>Earthquake Data Search</h1>
          <div className={styles.daypicker}>
            <DayPickerInput
              style={{ color: '#192356', fontSize: '20px' }}
              dayPickerProps={{
                disabledDays: {
                  after: new Date(),
                },
              }}
              onDayChange={(day) => {
                if (typeof day === 'undefined') return;
                dispatch({
                  type: ActionType.RESET_WITH_NEW_DATE,
                  payload: { selectedDate: formatDateToDash(day) },
                });
              }}
            />
          </div>
        </div>
        {eqs.length === 0 ? (
          <p className={styles.subText}>
            Please enter valid date before today to search for data.
          </p>
        ) : (
          <>
            <Table eqs={eqs} state={state} dispatch={dispatch} />
            <Pagenation eqs={eqs} state={state} dispatch={dispatch} />
          </>
        )}
      </div>
      <div className={`${styles.wrapper}`}>
        <Map eqs={eqs} state={state} dispatch={dispatch} />
      </div>
    </main>
  );
};

export default App;
