import { Pilot } from './pilot';

export class Team {
    id: number;
    name: string;
    country: string;
    color: string;
    podiums: number;
    champions: number;
    pilots: Pilot[];
}
