export type Clan = {
    "name": string;
    "num_members": number;
    "level": number;
    'weight_lifted': number;
    'curr_xp': number;
    'target_xp': number;
}

export type User = {
    "username": string;
    "email": string;
    "name": string;
    "curr_xp": number;
    "target_xp": number;
    "level": number;
}

export type EXP = {
    'curr_xp': number;
    'target_xp': number;
    'level': number;
}