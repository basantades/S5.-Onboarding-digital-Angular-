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
    const dots = document.querySelectorAll('.dot');

    this.currentStep++;

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active-dot');
    }
    if (currentCard) {
      currentCard.classList.remove('principal');
      currentCard.classList.add('anterior');
    }
    if (nextCard) {
      
      const nextCardDots = nextCard.querySelectorAll('.dot');
      nextCardDots[this.currentStep - 1].classList.add('active-dot');

      nextCard.classList.remove('siguiente');
      nextCard.classList.add('principal');
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
    const dots = document.querySelectorAll('.dot');

    this.currentStep--;

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active-dot');
    }
    if (currentCard) {
      currentCard.classList.remove('principal');
      currentCard.classList.add('siguiente');
    }
    if (previousCard) {
      const previousCardDots = previousCard.querySelectorAll('.dot');
      previousCardDots[this.currentStep - 1].classList.add('active-dot');

      previousCard.classList.remove('anterior');
      previousCard.classList.add('principal');
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
