import { InMemoryDbService } from 'angular-in-memory-web-api';
import { addToViewTree } from '@angular/core/src/render3/instructions';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        // Create teams
        const teams = [
            { id: 1, name: 'Mercedes', country: 'GER', color: '#00D2BE', pilots: [
                '3aead28c5fde52784b12c83c25d1a9a2',
                '769aaa69ea361abec338fdbe52be79c8' ] },
            { id: 2, name: 'Ferarri', country: 'GER', color: '#DC0000', pilots: [
                'b5e989b6b653b744880c8dacec71c40a',
                'a3ac00139f8fa1a5a63ab843f5772ab9' ] },
            { id: 3, name: 'Red Bull Racing', country: 'AUS', color: '#1E41FF', pilots: [
                    '6582080b78b55cd08fd26c662a1c8884',
                    'e262b9502038e1a66f323e3cacd29cc5' ] },
            { id: 4, name: 'Force India', country: 'IND', color: '#F596C8', pilots: [
                        'd7d3709a3ccdc64bf2887e71eba43d83',
                        '685f92b696be21b2ad737ba08834a588' ] },
            { id: 5, name: 'Renault', country: 'FRA', color: '#FFF500', pilots: [
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
