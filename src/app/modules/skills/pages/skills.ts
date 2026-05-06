import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillService } from '../domain/services/skill.service';
import { Skill } from '../domain/models/skill.model';
import { TagModule } from 'primeng/tag';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-skills-page',
    standalone: true,
    imports: [CommonModule, TagModule],
    templateUrl: './skills.html',
    styleUrl: './skills.css'
})
export class SkillsPage implements OnInit {
    private skillService = inject(SkillService);
    skills$!: Observable<Skill[]>;

    ngOnInit(): void {
        this.skills$ = this.skillService.getSkills();
    }
}
