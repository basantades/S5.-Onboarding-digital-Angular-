import { Component, inject} from '@angular/core';
import { EscenaComponent } from '../escena/escena.component';
import { IStep } from '../../interfaces/istep';
import { StepsService } from '../../service/steps.service';

@Component({
  selector: 'app-home',
  imports: [EscenaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  
  steps: IStep[] = [];
  StepsService = inject(StepsService);

  constructor(){
    this.steps = this.StepsService.getSteps()
  }

}
