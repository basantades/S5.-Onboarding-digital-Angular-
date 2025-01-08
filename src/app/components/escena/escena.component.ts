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

  currentStep = 1;

  nextCard() {
    const currentCard = document.getElementById(`card-${this.currentStep}`);
    const nextCard = document.getElementById(`card-${this.currentStep + 1}`);

    if (currentCard && nextCard) {
      currentCard.classList.add('ocultar');
      nextCard.classList.remove('ocultar');
      this.currentStep++;
    }
  }

  previousCard() {
    const currentCard = document.getElementById(`card-${this.currentStep}`);
    const previousCard = document.getElementById(`card-${this.currentStep - 1}`);

    if (currentCard && previousCard) {
      currentCard.classList.add('ocultar');
      previousCard.classList.remove('ocultar');
      this.currentStep--;
    }
  }
}
