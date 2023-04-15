export enum GameModes {
  Start = 0,
  Pause = 1,
  Reset = 2,
}

export enum GameSpeeds {
  OneX = 500,
  FiveX = 200,
  TenX = 100,
}

export enum GameNetSizes {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
}

export const DEFAULT_XAXIS = 15;
export const DEFAULT_YAXIS = 15;

export const GAME_FIELD_SIZES_INFO = Object.freeze({
  [GameNetSizes.Small]: { x: DEFAULT_XAXIS, y: DEFAULT_YAXIS },
  [GameNetSizes.Medium]: { x: 30, y: 30 },
  [GameNetSizes.Large]: { x: 45, y: 45 },
});

export type NetElement = {
  x: number;
  y: number;
};
