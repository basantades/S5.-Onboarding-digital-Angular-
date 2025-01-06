import { Injectable } from '@angular/core';
import { IStep } from '../interfaces/istep';

@Injectable({
  providedIn: 'root'
})
export class StepsService {

  steps: IStep[] = [
    { 
      title: "Dedica moltes hores", 
      descripcion: "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.", 
      img: "assets/time_managment.svg",
      bgcolor: '#47a6b9' 
    },
    { 
      title: "Programa projectes propis", 
      descripcion: "Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.", 
      img: "assets/programming.svg", 
      bgcolor: '#d3d4d9' 
    },
    { 
      title: "Procura descansar", 
      descripcion: "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.", 
      img: "assets/meditation.svg", 
      bgcolor: '#ffd167' 
    }
    ];

  getSteps(): IStep[] {
    return this.steps;
  }

  constructor() { }
}
