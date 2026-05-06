import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { Formation } from '../domain/models/formation.model';
import { FormationService } from '../domain/services/formation.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-formation-page',
    standalone: true,
    imports: [CommonModule, TimelineModule, CardModule],
    templateUrl: './formation.html',
    styleUrl: './formation.css'
})
export class FormationPage implements OnInit {
    private formationService = inject(FormationService);
    formations$!: Observable<Formation[]>;

    ngOnInit(): void {
        this.formations$ = this.formationService.getFormations();
    }
}
