export const PLAY_INTENT = 'PLAY';
export const STOP_INTENT = 'STOP';
export const SHUFFLE_ON_INTENT = 'SHUFFLE_ON';
export const SHUFFLE_OFF_INTENT = 'SHUFFLE_OFF';
export const REPEAT_ON_INTENT = 'REPEAT_ON';
export const REPEAT_OFF_INTENT = 'REPEAT_OFF';
export const REPEAT_ONE_INTENT = 'REPEAT_ONE';
export const FOLLOW_INTENT = 'FOLLOW';
export const ADD_TO_COLLECTION_INTENT = 'ADD_TO_COLLECTION';
export const THUMBS_UP_INTENT = 'THUMBS_UP';
export const BAN_TRACK_INTENT = 'BAN_TRACK';
export const NEXT_INTENT = 'NEXT';
export const PREVIOUS_INTENT = 'PREVIOUS';
export const SEEK_BACK_15_SECONDS_INTENT = 'SEEK_BACK_15_SECONDS';
export const SEEK_FORWARD_15_SECONDS_INTENT = 'SEEK_FORWARD_15_SECONDS';
export const SET_PLAYBACK_SPEED_1X_INTENT = 'SET_PLAYBACK_SPEED_1X';
export const SET_PLAYBACK_SPEED_1POINT2X_INTENT = 'SET_PLAYBACK_SPEED_1POINT2X';
export const SET_PLAYBACK_SPEED_1POINT5X_INTENT = 'SET_PLAYBACK_SPEED_1POINT5X';
export const MUTE_MIC_INTENT = 'MUTE_MIC';
export const MUTE_INTENT = 'MUTE';
export const CANCEL_INTERACTION_INTENT = 'CANCEL_INTERACTION';
export const SHOW_INTENT = 'SHOW';
export const ADD_TO_QUEUE_INTENT = 'ADD_TO_QUEUE';
export const SEARCH_INTENT = 'SEARCH';
export const PLAY_PRESET_INTENT = 'PLAY_PRESET';
export const SAVE_TO_PRESET_INTENT = 'SAVE_TO_PRESET';
const MORE_LIKE_THIS = 'MORE_LIKE_THIS';

export const NO_INTENT = 'NO_INTENT';

const VOICE_CONFIRMATION_INTENTS_WITHOUT_ICON = [
  PLAY_INTENT,
  STOP_INTENT,
  NEXT_INTENT,
  PREVIOUS_INTENT,
];

export const VOICE_CONFIRMATION_INTENTS_WITH_ICON = [
  SHUFFLE_ON_INTENT,
  SHUFFLE_OFF_INTENT,
  REPEAT_ON_INTENT,
  REPEAT_OFF_INTENT,
  REPEAT_ONE_INTENT,
  FOLLOW_INTENT,
  ADD_TO_COLLECTION_INTENT,
  THUMBS_UP_INTENT,
  BAN_TRACK_INTENT,
  SEEK_BACK_15_SECONDS_INTENT,
  SEEK_FORWARD_15_SECONDS_INTENT,
  SET_PLAYBACK_SPEED_1X_INTENT,
  SET_PLAYBACK_SPEED_1POINT2X_INTENT,
  SET_PLAYBACK_SPEED_1POINT5X_INTENT,
  MUTE_MIC_INTENT,
  MUTE_INTENT,
];

export const VOICE_CONFIRMATION_INTENTS = [
  ...VOICE_CONFIRMATION_INTENTS_WITH_ICON,
  ...VOICE_CONFIRMATION_INTENTS_WITHOUT_ICON,
];

export type VoiceConfirmationIntent = typeof VOICE_CONFIRMATION_INTENTS[number];

export const SEARCH_RESULT_INTENTS = [
  SHOW_INTENT,
  SEARCH_INTENT,
  NO_INTENT,
  PLAY_INTENT,
  MORE_LIKE_THIS,
];

// detailed description about INTENTS:
// https://ghe.spotify.net/nlu/annotation-server/blob/master/src/main/proto/spotify/nlu/slimo/v1/slimo.proto
export const NO_CONFIRMATION_INTENTS = [
  'RESUME',
  'WHATS_PLAYING',
  'HELP',
  'VOLUME_UP',
  'VOLUME_DOWN',
  'WHATS_PLAYING',
  'VOLUME_ABSOLUTE',
  'TRANSFER_PLAYBACK',
];
