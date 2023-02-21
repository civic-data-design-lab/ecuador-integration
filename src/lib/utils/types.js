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
  INSTRUCTIONS: 'instructions',
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
 * @typedef Option
 * @prop {number} id
 * @prop {string} description
 * @prop {ResourcesObject} updates
 */

/**
 * @typedef Card
 * @prop {number} id
 * @prop {string} category
 * @prop {string} title
 * @prop {string} description
 * @prop {string} resourcesRequired
 * @prop {Option[]} options
 */

/**
 * @typedef PastAction
 * @prop {number} cardId - The card that was drawn
 * @prop {number} optionId - The ID of the option that was selected
 */

/**
 * @typedef GameData
 * @prop {string} state - The current game state
 * @prop {string | null} currentCardId - The current card ID the user has drawn
 * @prop {string | null} migrantId - The selected migrant ID
 * @prop {ResourcesObject} resources - The migrant's resources (e.g. time,
 *    money, wellbeing)
 * @prop {PastAction[]} pastActions - List of past actions in this game
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
  migrantId: null,
  resources: {
    skills: [],
    time: 0,
    money: 0,
    wellbeing: 0,
  },
  pastActions: [],
};

// Used for round numbers (4 rounds)
export const NUM_TO_ORDINAL_ARR = ['first', 'second', 'third', 'fourth'];
