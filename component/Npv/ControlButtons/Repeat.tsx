import {
  IconRepeat48,
  IconRepeatActive48,
  IconRepeatOne48,
} from 'component/CarthingUIComponents';
import { NpvIcon } from 'component/Npv/ControlButtons/Controls';
import { observer } from 'mobx-react-lite';
import { useStore } from 'context/store';
import ControlButton from './ControlButton';
import styles from './Controls.module.scss';

const Repeat = () => {
  const uiState = useStore().npvStore.controlButtonsUiState;
  const { playerStore } = useStore();
  return (
    <>
      {uiState.repeatState === 0 ? (
        <ControlButton
          id={NpvIcon.REPEAT_NONE}
          onClick={uiState.handleRepeatClick}
        >
          <IconRepeat48 />
        </ControlButton>
      ) : uiState.repeatState === 1 ? (
        <ControlButton
          id={NpvIcon.REPEAT_CONTEXT}
          onClick={uiState.handleRepeatContextClick}
        >
          <div className={styles.iconShuffleActive}>
            <IconRepeatActive48 />
          </div>
        </ControlButton>
      ) : (
        <ControlButton
          id={NpvIcon.REPEAT_TRACK}
          onClick={uiState.handleRepeatTrackClick}
        >
          <div className={styles.iconShuffleActive}>
            <IconRepeatOne48 />
          </div>
        </ControlButton>
      )}
    </>
  );
};

export default observer(Repeat);
