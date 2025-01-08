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

  currentStepId = 1;

  nextCard() {
    const currentCard = document.getElementById(`card-${this.currentStepId}`);
    const nextCard = document.getElementById(`card-${this.currentStepId + 1}`);

    if (currentCard && nextCard) {
      currentCard.classList.add('ocultar');
      nextCard.classList.remove('ocultar');
      this.currentStepId++;
    }
  }

  previousCard() {
    const currentCard = document.getElementById(`card-${this.currentStepId}`);
    const previousCard = document.getElementById(`card-${this.currentStepId - 1}`);

    if (currentCard && previousCard) {
      currentCard.classList.add('ocultar');
      previousCard.classList.remove('ocultar');
      this.currentStepId--;
    }
  }
}
