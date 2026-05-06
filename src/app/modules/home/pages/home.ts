import { Component } from '@angular/core';
import { PresentationPage } from '../../presentation/pages/presentation';
import { SkillsPage } from '../../skills/pages/skills';
import { FormationPage } from '../../formation/pages/formation';
import { ProjectsPage } from '../../projects/pages/projects';
import { ContactPage } from '../../contact/pages/contact';

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [PresentationPage, SkillsPage, FormationPage, ProjectsPage, ContactPage],
    templateUrl: './home.html',
    styleUrl: './home.css'
})
export class HomePage {
}
