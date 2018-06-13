import { Pilot } from './pilot';

export class Team {
    id: number;
    name: string;
    country: string;
    color: string;
    podiums: number;
    champions: number;
    fullName: string;
    base: string;
    teamChief: string;
    powerUnit: string;
    firstEntry: number;
    worldChampionships: number;
    polePositions: number;
    pilots: Pilot[];
}
