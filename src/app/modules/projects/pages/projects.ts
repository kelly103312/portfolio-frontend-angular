import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../domain/services/project.service';
import { Project } from '../domain/models/project.model';
import { ProjectCardComponent } from '../components/project-card/project-card';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-projects-page',
    standalone: true,
    imports: [CommonModule, ProjectCardComponent],
    templateUrl: './projects.html',
    styleUrl: './projects.css'
})
export class ProjectsPage implements OnInit {
    private projectService = inject(ProjectService);
    projects$!: Observable<Project[]>;

    ngOnInit(): void {
        this.projects$ = this.projectService.getProjects();
    }
}
