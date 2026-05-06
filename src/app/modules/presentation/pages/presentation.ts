import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
    selector: 'app-presentation-page',
    standalone: true,
    imports: [ButtonModule, TagModule],
    templateUrl: './presentation.html',
    styleUrl: './presentation.css'
})
export class PresentationPage {
    exploreMyWork() {
        console.log('Explore My Work');
    }

    getInTouch() {
        console.log('Get in Touch');
    }
}
