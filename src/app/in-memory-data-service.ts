import { InMemoryDbService } from 'angular-in-memory-web-api';
import { addToViewTree } from '@angular/core/src/render3/instructions';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        // Create teams
        const teams = [
            { id: 1, name: 'Mercedes', country: 'GER', color: '#00D2BE', podiums: 145, champions: 4, pilots: [
                '3aead28c5fde52784b12c83c25d1a9a2',
                '769aaa69ea361abec338fdbe52be79c8' ],
                fullName: 'Mercedes AMG Petronas Motorsport', base: 'Brackley, United Kingdom',
                teamChief: 'Toto Wolff', powerUnit: 'Mercedes', firstEntry: 1970, worldChampionships: 4,
                polePositions: 82 },
            { id: 2, name: 'Ferrari', country: 'GER', color: '#DC0000', podiums: 745, champions: 16, pilots: [
                'b5e989b6b653b744880c8dacec71c40a',
                'a3ac00139f8fa1a5a63ab843f5772ab9' ],
                fullName: 'Scuderia Ferrari', base: 'Maranello, Italy',
                teamChief: 'Maurizio Arrivabene', powerUnit: 'Ferrari', firstEntry: 1950, worldChampionships: 16,
                polePositions: 210 },
            { id: 3, name: 'Red Bull Racing', country: 'AUS', color: '#1E41FF', podiums: 151, champions: 4, pilots: [
                '6582080b78b55cd08fd26c662a1c8884',
                'e262b9502038e1a66f323e3cacd29cc5' ],
                fullName: 'Aston Martin Red Bull Racing', base: 'Milton Keynes, United Kingdom',
                teamChief: 'Christian Horner', powerUnit: 'TAG Heuer', firstEntry: 1997, worldChampionships: 4,
                polePositions: 59 },
            { id: 4, name: 'Force India', country: 'IND', color: '#F596C8', podiums: 6, champions: 0, pilots: [
                'd7d3709a3ccdc64bf2887e71eba43d83',
                '685f92b696be21b2ad737ba08834a588' ],
                fullName: 'Sahara Force India F1 Team', base: 'Silverstone, United Kingdom',
                teamChief: 'Vijay Mallya', powerUnit: 'Mercedes', firstEntry: 1991, worldChampionships: undefined,
                polePositions: 1 },
            { id: 5, name: 'Renault', country: 'FRA', color: '#FFF500', podiums: 59, champions: 2, pilots: [
                '',
                '' ] },
        ];

        // Create pilots (without teams yet)
        const pilots = [
            {id: '3aead28c5fde52784b12c83c25d1a9a2', firstName: 'Lewis', lastName: 'Hamilton', number: 44, teamId: 1},
            {id: 'b5e989b6b653b744880c8dacec71c40a', firstName: 'Sebastian', lastName: 'Vettel', number: 5, teamId: 2},
            {id: '769aaa69ea361abec338fdbe52be79c8', firstName: 'Valtteri', lastName: 'Bottas', number: 77, teamId: 1},
            {id: 'a3ac00139f8fa1a5a63ab843f5772ab9', firstName: 'Kimi', lastName: 'Räikkönen', number: 7, teamId: 2},
            {id: '6582080b78b55cd08fd26c662a1c8884', firstName: 'Daniel', lastName: 'Ricciardo', number: 3, teamId: 3},
            {id: 'e262b9502038e1a66f323e3cacd29cc5', firstName: 'Max', lastName: 'Verstappen', number: 33, teamId: 3},
            {id: 'd7d3709a3ccdc64bf2887e71eba43d83', firstName: 'Sergio', lastName: 'Perez', number: 11, teamId: 4},
            {id: '685f92b696be21b2ad737ba08834a588', firstName: 'Esteban', lastName: 'Ocon', number: 31, teamId: 4},
        ];

        return { pilots, teams};
    }
}
