import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../domain/models/experience.model';
import { ExperienceService } from '../domain/services/experience.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-experience-page',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './experience.html',
    styleUrl: './experience.css'
})
export class ExperiencePage implements OnInit {
    private experienceService = inject(ExperienceService);
    experiences$!: Observable<Experience[]>;

    ngOnInit(): void {
        this.experiences$ = this.experienceService.getExperiences();
    }
}
