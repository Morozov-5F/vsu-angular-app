import { InMemoryDbService } from 'angular-in-memory-web-api';
import { addToViewTree } from '@angular/core/src/render3/instructions';
import { Md5 } from 'ts-md5/dist/md5';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const pilots = [
            {id: '', firstName: 'Lewis', lastName: 'Hamilton', number: 44, team: 'Mercedes'},
            {id: '', firstName: 'Valtteri', lastName: 'Bottas', number: 77, team: 'Mercedes'},
            {id: '', firstName: 'Sebastian', lastName: 'Vettel', number: 5, team: 'Ferrari'},
            {id: '', firstName: 'Kimi', lastName: 'Räikkönen', number: 7, team: 'Ferrari'},
        ];

        pilots.forEach(pilot => {
            const md5       = new Md5();
            const hash_base = `${pilot.firstName}_${pilot.lastName}`.toLowerCase();
            pilot.id = md5.appendStr(hash_base).end().toString();
        });



        return { pilots };
    }
}
