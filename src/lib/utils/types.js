// ------------
// Enumerations
// ------------
export const Skills = {
  CONSTRUCTION: 'construction',
  DIGITAL: 'digital skills',
  BUSINESS: 'business',
  MARKETING: 'marketing',
  LEGALIZATION: 'legalization',
};

export const GameStates = {
  START: 'start', // Start
  MIGRANT_SELECT: 'migrant-select',
  JOB_SELECT: 'job-select',
  PROFILE: 'profile',
  ROUND_START: 'round-start',
  DRAW_CARD: 'draw-card',
  DECISION: 'decision',
  /** Users select an assistance card, shows up after rounds 1 and 3 */
  ASSISTANCE: 'assistance',
  GAME_END: 'game-end',
};

export const CopingLevels = {
  STRESS: 'stress',
  CRITICAL: 'critical',
  EMERGENCY: 'emergency',
};

export const Languages = {
  ENGLISH: 'en',
  SPANISH: 'es',
};

// ----------------
// Type Definitions
// ----------------

/**
 * @typedef Option
 * @prop {number} id - The option ID, used when consulting the past actions
 * @prop {string} description - What the option entails for the user
 * @prop {ResourcesObject} updates - A set of updates to specific resources. Any
 *    'quantitative' resource updates is represented by the change in value in
 *    this object (e.g., if choosing this option means you lose `5` units of time,
 *    you would encode `{ time: -5 }`). Any skill gain is encoded in an array of
 *    skill strings. For example, if the user gains digital skills, you would
 *    encode `{ skills: ['digital skills'] }`
 * @prop {string} [except] - Exception text. For example, if this is a "do
 *    nothing" option, you may include exception such as "but you are at risk
 *    of..."
 * @prop {string} implicationText - Describes qualitatively the implication of
 *    the decision associated with this option
 */

/**
 * @typedef Card
 * @prop {number} id - The card ID
 * @prop {string} category - The overall card category
 * @prop {string} title - The title, summary of what the card is
 * @prop {string} description - Detailed description of the card and what it
 *    offers or what it requests from users
 * @prop {string} prompt - The card's prompt, from which the user will have to
 *    make a decision based on the card's options
 * @prop {string[]} resourcesRequired - List of required resources if users
 *    choose to accept the card's prompt, may be empty
 * @prop {string[]} skillsEarned - List of skills earned if users choose to
 *    accept the card's prompt, may be empty
 * @prop {Option[]} options - List of options associated with this card, may be
 *    empty
 * @prop {string} image - The full name of the image to use with this card (with
 *    file extension)
 */

/**
 * @typedef PastAction
 * @prop {number} [cardId] - The card that was drawn
 * @prop {number} [optionId] - The ID of the option that was selected
 * @prop {number} [assistanceId] - The ID of the assistance card that was drawn
 */

/**
 * @typedef GameData
 * @prop {string} state - The current game state
 * @prop {number | null} currentCardId - The current card ID the user has drawn
 * @prop {number | null} migrantId - The selected migrant ID
 * @prop {number | null} jobId - The selected job the migrant has
 * @prop {number} round - 0-indexed round number, can be used to index past actions
 * @prop {ResourcesObject} resources - The migrant's resources
 * @prop {PastAction[]} pastActions - List of past actions in this game
 */

/**
 * @typedef ExpendituresObject
 *
 * Represents the monthly expenditures of a migrant broken down into different
 * categories such as rent, food, health, etc.
 *
 * @prop {number} rent - Amount of rent expenses
 * @prop {number} food - Amount of food expenses
 * @prop {number} health - Amount of basic health expenses
 * @prop {number} householdUtilitiesEssential - *Essential* household expenses
 * @prop {number} householdUtilitiesNonEssential - *Non-essential* household
 *    expenses
 * @prop {number} remittances - Amount spent on remittances each month
 * @prop {number} internet - Amount spent on internet expenses
 */

/**
 * @typedef ResourcesObject
 *
 * Represents the resources a migrant has. This also includes "negative"
 * resources such as expenditures.
 *
 * @prop {string[]} skills - Array of skills (see Skills enum)
 * @prop {number} time - Number of hours working per week.
 * @prop {number} money - Money quantitative resource
 * @prop {ExpendituresObject} expenditures - Expenditures broken down into
 *    several categories (see `ExpendituresObject`)
 * @prop {object} income - Income object, broken down into salary and assistance
 * @prop {number} income.salary - The migrant's income from job salary
 * @prop {number} income.assistance - The migrant's income from assistance
 * @prop {string | null} copingLevel - The coping level the migrant is
 *    experiencing (see `CopingLevel` enum)
 * @prop {string[]} accreditations - List of the migrant's accreditations
 */

/**
 * @typedef SEOProps
 *
 * Defines the props for the head of each page.
 *
 * @prop {string} pageTitle - Passed in from the individual pages
 * @prop {string} slug - Passed in from individual pages
 * @prop {string} ogLanguage - Passed in from the root layout
 * @prop {string} metadescription - Changes language depending on setting
 */

// ---------
// Constants
// ---------

/** The number of rounds in a game. */
export const NUM_ROUNDS = 4;

/**
 * @type {GameData}
 */
export const INITIAL_GAME_DATA = {
  state: GameStates.START,
  currentCardId: null,
  migrantId: null,
  jobId: null,
  round: 0,
  resources: null,
  pastActions: [],
};

// Used for round numbers (for 4 rounds)
export const NUM_TO_ORDINAL_ARR = {
  [Languages.ENGLISH]: ['first', 'second', 'third', 'fourth'],
  [Languages.SPANISH]: ['primer', 'segund', 'tercer', 'cuart'],
};

export const CARD_CATEGORY_COLOR_MAP = {
  'Personal Improvement': 'red',
  Assistance: 'blue',
  'Life Event': 'yellow',
};

/** Time in milliseconds of a resource update animation */
export const RESOURCE_UPDATE_ANIM_DURATION = 1000;

/** Amount of time to wait between resource update animations. */
export const RESOURCE_UPDATE_ANIM_DELAY = 300;

/** Time in milliseconds of the drawer slide up/down animation. */
export const DRAWER_ANIM_DURATION = 1000;

/** One-year duration in seconds. */
export const YEAR = 60 * 60 * 24 * 365;
