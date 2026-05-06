import { Injectable } from '@angular/core';
import { Skill } from '../models/skill.model';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SkillService {
    private Skills: Skill[] = [
        {
            id: '1',
            title: 'Angular'
        },
        {
            id: '2',
            title: 'FatAPI'
        },
        {
            id: '3',
            title: 'Java SpringBoot'
        },
        {
            id: '4',
            title: 'PostgreSQL'
        }
    ];

    getSkills(): Observable<Skill[]> {
        return of(this.Skills);
    }
}
