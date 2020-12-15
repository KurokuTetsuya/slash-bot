export interface InteractionData {
    id: string;
    type: 1 | 2;
    data: ApplicationCommandInteractionData;
    guild_id: string;
    channel_id: string;
    member: GuildMember;
    token: string;
    version: number;
}

export interface ApplicationCommandInteractionData {
    id: string;
    name: string;
    options: ApplicationCommandInteractionDataOption[]|void;
}

export interface ApplicationCommandInteractionDataOption {
    name: string;
    value: ApplicationCommandOptionType|void;
    options: ApplicationCommandOption[]|void;
}

export interface ApplicationCommandOption {
    type: ApplicationCommandOptionType;
    name: string;
    description: string;
    default: boolean|void;
    required: boolean|void;
    choices: ApplicationCommandOptionChoice;
    options: ApplicationCommandOption; // Nested Sub-command
}

export interface ApplicationCommandOptionChoice {
    name: string;
    value: string|number;
}

export type ApplicationCommandOptionType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface User {
    id: string;
    username: string;
    discriminator: string;
    avatar: string;
    bot: boolean|void;
    system: boolean|void;
    mfa_enabled: boolean|void;
    locale: string|void;
    verified: boolean|void;
    email: string|void;
    flags: number|void;
    premium_type: number|void;
    public_flags: number|void;
}

export interface GuildMember {
    user: User;
    nick: string|void;
    roles: string[];
    joined_at: string;
    premium_since: string|void;
    deaf: boolean;
    mute: boolean;
}
