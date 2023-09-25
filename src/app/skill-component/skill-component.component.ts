import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../models/Skill.model';


@Component({
  selector: 'app-skill-component',
  templateUrl: './skill-component.component.html',
  styleUrls: ['./skill-component.component.css']
})
export class SkillComponentComponent implements OnInit{

  @Input() 
  skill!:Skill; /* añadimos el input que le hemos pasado en el template de developpers [skill]="skill" 
  de aquí, recuperamos la información que viene de devComp (com padre) que interpolamos al template de skills
  Si hay que crear más instancias de diferentes objetos, esto no hace falta tocarlo. Basta con crear el objeto correspondiente (developer2) en el componente padre y darle los atributos y el binding para el input necesarios*/
  
  

  constructor(){}

  ngOnInit(): void {console.log(this.skill)

  }
}
