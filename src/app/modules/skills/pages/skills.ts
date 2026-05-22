import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillService } from '../domain/services/skill.service';
import { Skill } from '../domain/models/skill.model';
import { TagModule } from 'primeng/tag';
import { Observable, map } from 'rxjs';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'app-skills-page',
    standalone: true,
    imports: [CommonModule, TagModule, CardModule],
    templateUrl: './skills.html',
    styleUrl: './skills.css'
})
export class SkillsPage implements OnInit {
    private skillService = inject(SkillService);
    skillsBackend$!: Observable<Skill[]>;
    skillsFrontend$!: Observable<Skill[]>;
    skillsTools$!: Observable<Skill[]>;

    ngOnInit(): void {
        this.skillsBackend$ = this.skillService.getSkills().pipe(
            map(skills => skills.filter(s => s.category === 'Backend'))
        );
        this.skillsFrontend$ = this.skillService.getSkills().pipe(
            map(skills => skills.filter(s => s.category === 'Frontend'))
        );
        this.skillsTools$ = this.skillService.getSkills().pipe(
            map(skills => skills.filter(s => s.category === 'Tools'))
        );

    }
}
