// ------------
// Enumerations
// ------------
export const Skills = {
  CONSTRUCTION: 'construction',
  DIGITAL: 'digital skills',
  FINANCIAL: 'financial',
  MARKETING: 'marketing',
  LEGALIZATION: 'legalization',
};

export const Resources = {
  MONEY: 'money',
  TIME: 'time',
  WELLBEING: 'wellbeing',
};

export const GameStates = {
  START: 'start',
  MIGRANT_SELECT: 'migrant-select',
  JOB_SELECT: 'job-select',
  ROUND_START: 'round-start',
  INCOME: 'income',
  EXPENSES: 'expenses',
  DRAW_CARD: 'draw-card',
  DECISION: 'decision',
};

// ----------------
// Type Definitions
// ----------------

/**
 * @typedef GameData
 * @prop {string} state - The current game state
 * @prop {string} currentCardId - The current card ID the user has drawn
 * @prop {string} migrantId - The selected migrant ID
 * @prop {ResourcesObject} resources - The migrant's resources (e.g. time,
 *    money, wellbeing)
 */

/**
 * @typedef ResourcesObject
 * @prop {string[]} skills
 * @prop {number} time
 * @prop {number} money
 * @prop {number} wellbeing
 */

// ---------
// Constants
// ---------

/**
 * @type {GameData}
 */
export const INITIAL_GAME_DATA = {
  state: GameStates.START,
  currentCardId: null,
  migrant: null,
  resources: {
    skills: [],
    time: 0,
    money: 0,
    wellbeing: 0,
  },
  // TODO: store past actions in game data, define a type for this
};