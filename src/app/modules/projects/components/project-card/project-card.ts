import { Component, Input } from '@angular/core';
import { Project } from '../../domain/models/project.model';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
    selector: 'app-project-card',
    standalone: true,
    imports: [CommonModule, CardModule, ButtonModule, TagModule],
    templateUrl: './project-card.html',
    styleUrl: './project-card.css'
})
export class ProjectCardComponent {
    @Input({ required: true }) project!: Project;
}
