import { Component, inject, Input } from '@angular/core';
import { IStep } from '../../interfaces/istep';
import { StepsService } from '../../service/steps.service';

@Component({
  selector: 'app-escena',
  imports: [],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss'
})
export class EscenaComponent {

  @Input() steps: IStep[] = [];

}
