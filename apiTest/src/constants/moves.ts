export enum MoveAilmtents {
  UNKNOWN = -1,
  NONE = 0,
  PARALYSIS = 1,
  SLEEP = 2,
  FREEZE = 3,
  BURN = 4,
  POISON = 5,
  CONFUSION = 6,
  INFATUATION = 7,
  TRAP = 8,
  NIGHTMARE = 9,
  TORMENT = 12,
  DISABLE = 13,
  YAWN = 14,
  HEAL_BLOCK = 15,
  NO_TYPE_IMMUNITY = 17,
  LEECH_SEED = 18,
  EMBARGO = 19,
  PERISH_SONG = 20,
  INGRAIN = 21,
  SILENCE = 24,
  TAR_SHOT = 42,
}

export enum MoveBattleStyles {
  ATTACK = 1,
  DEFENSE = 2,
  SUPPORT = 3,
}

export enum MoveCategories {
  DAMAGE = 0,
  AILMENT = 1,
  NET_GOOD_STATS = 2,
  HEAL = 3,
  DAMAGE_AILMENT = 4,
  SWAGGER = 5,
  DAMAGE_LOWER = 6,
  DAMAGE_RAISE = 7,
  DAMAGE_HEAL = 8,
  OHKO = 9,
  WHOLE_FIELD_EFFECT = 10,
  FIELD_EFFECT = 11,
  FORCE_SWITCH = 12,
  UNIQUE = 13,
}

export enum MoveDamageClasses {
  STATUS = 1,
  PHYSICAL = 2,
  SPECIAL = 3,
}

export enum MoveLearnMethods {
  LEVEL_UP = 1,
  EGG = 2,
  TUTOR = 3,
  MACHINE = 4,
  STADIUM_SURFING_PIKACHU = 5,
  LIGHT_BALL_EGG = 6,
  COLOSSEUM_PURIFICATION = 7,
  XD_SHADOW = 8,
  XD_PURIFICATION = 9,
  FORM_CHANGE = 10,
}

export enum MoveTargets {
  SPECIFIC_MOVE = 1,
  SELECTED_POKEMON_ME_FIRST = 2,
  ALLY = 3,
  USERS_FIELD = 4,
  USER_OR_ALLY = 5,
  OPPONENTS_FIELD = 6,
  USER = 7,
  RANDOM_OPPONENT = 8,
  ALL_OTHER_POKEMON = 9,
  SELECTED_POKEMON = 10,
  ALL_OPPONENTS = 11,
  ENTIRE_FIELD = 12,
  USER_AND_ALIES = 13,
  ALL_POKEMON = 14,
  ALL_ALLIES = 15,
}
