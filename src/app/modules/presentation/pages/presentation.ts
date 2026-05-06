import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { InteractiveCubeComponent } from '../components/interactive-cube/interactive-cube.component';

@Component({
    selector: 'app-presentation-page',
    standalone: true,
    imports: [ButtonModule, TagModule, InteractiveCubeComponent],
    templateUrl: './presentation.html',
    styleUrl: './presentation.css'
})
export class PresentationPage {
    scrollTo(elementId: string) {
        document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
    }
}
