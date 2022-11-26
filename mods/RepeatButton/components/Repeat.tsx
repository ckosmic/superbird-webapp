import {
    IconRepeat48,
    IconRepeatOneActive48,
    IconRepeatActive48
  } from 'component/CarthingUIComponents';
  import ControlButton from 'component/Npv/ControlButtons/ControlButton';
  import { NpvIcon } from 'component/Npv/ControlButtons/Controls';
  import { useStore } from 'context/store';
  import { observer } from 'mobx-react-lite';
  import styles from 'component/Npv/ControlButtons/Controls.module.scss';
  
  const Repeat = () => {
    const uiState = useStore().npvStore.controlButtonsUiState;
    const { playerStore } = useStore();
    return (
      <>
        {uiState.repeatState == 0 ? (
          <ControlButton
            id={NpvIcon.UNREPEAT}
            onClick={uiState.handleRepeatClick}
            isDisabled={!playerStore.canToggleRepeat}
          >
            <IconRepeat48 />
          </ControlButton>
        ) : uiState.repeatState == 1 ? (
          <ControlButton
            id={NpvIcon.REPEAT}
            onClick={uiState.handleRepeatOnceClick}
            isDisabled={!playerStore.canToggleRepeat}
          >
            <div className={styles.iconShuffleActive}>
              <IconRepeatActive48 />
            </div>
          </ControlButton>
        ) : (
          <ControlButton
            id={NpvIcon.REPEAT_ONCE}
            onClick={uiState.handleUnrepeatClick}
            isDisabled={!playerStore.canToggleRepeat}
          >
            <div className={styles.iconShuffleActive}>
              <IconRepeatOneActive48 />
            </div>
          </ControlButton>
        )}
      </>
    );
  };
  
  export default observer(Repeat);