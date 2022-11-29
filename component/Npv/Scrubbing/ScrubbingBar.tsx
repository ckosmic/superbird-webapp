import { useStore } from 'context/store';
import { observer } from 'mobx-react-lite';
import styles from './ScrubbingBar.module.scss';

const ScrubbingBar = () => {
  const rootStore = useStore();
  const uiState = rootStore.npvStore.scrubbingUiState;
  const modsController = rootStore.modsController;
  const { colorChannels } = uiState;

  return (
    <div>
      {modsController.timestampsEnabled && uiState.playerStore.currentTrackUri !== '' ? (
        <div className={styles.timestampContainer}>
          <div className={styles.timestampInnerContainer}>
            <div>{uiState.trackPlayedTime}</div>
            <div>{uiState.trackLeftTime}</div>
          </div>
        </div>
      ) : null}
    <div
      className={styles.scrubbingBar}
      style={{
        backgroundColor: `rgb(${colorChannels.join(',')})`,
      }}
      data-testid="scrubbing-bar"
    >
      <div
        className={`${styles.progressPlayed} ${modsController.rainbowProgressEnabled ? styles.rainbow : ''}`}
        style={{
          transform: `scaleX(${uiState.trackPlayedPercent * 8})`,
        }}
      />
    </div>
    </div>
  );
};

export default observer(ScrubbingBar);
