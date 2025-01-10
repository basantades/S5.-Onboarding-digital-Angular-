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
    const nextCard2 = document.getElementById(`card-${this.currentStep + 2}`);
    const previousCard = document.getElementById(`card-${this.currentStep - 1}`);

    if (currentCard && nextCard) {
      currentCard.classList.remove('principal');
      currentCard.classList.add('anterior');
      nextCard.classList.remove('siguiente');
      nextCard.classList.add('principal');
      this.currentStep++;
    }
    if (nextCard2) {
      nextCard2.classList.remove('siguiente2');
      nextCard2.classList.add('siguiente');
    }
    if (previousCard) {
      previousCard.classList.remove('anterior');
      previousCard.classList.add('anterior2');
    }

  }

  previousCard() {
    const currentCard = document.getElementById(`card-${this.currentStep}`);
    const nextCard = document.getElementById(`card-${this.currentStep + 1}`);
    const previousCard = document.getElementById(`card-${this.currentStep - 1}`);
    const previousCard2 = document.getElementById(`card-${this.currentStep - 2}`);

    if (currentCard && previousCard) {
      currentCard.classList.remove('principal');
      currentCard.classList.add('siguiente');
      previousCard.classList.remove('anterior');
      previousCard.classList.add('principal');
      this.currentStep--;
    }
    if (previousCard2) {
      previousCard2.classList.remove('anterior2');
      previousCard2.classList.add('anterior');
    }
    if (nextCard) {
      nextCard.classList.remove('siguiente');
      nextCard.classList.add('siguiente2');
    }
  }
  

}
