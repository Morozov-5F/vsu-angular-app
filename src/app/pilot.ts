import { Team } from './team';

export class Pilot {
    id: string;
    firstName: string;
    lastName: string;
    number: number;
    teamId: number;
    team: Team;
}
