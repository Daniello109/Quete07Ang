import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/Developer.model';
import { Skill } from '../models/Skill.model';

@Component({
  selector: 'app-developer-component',
  templateUrl: './developer-component.component.html',
  styleUrls: ['./developer-component.component.css']
})
export class DeveloperComponentComponent implements OnInit{
 
  developer1!:Developer; /* crea una propiedad, de clase Developer, para integrarla en este componente */
  developer2!:Developer;

  ngOnInit(): void {  

    const skillList1:Skill = new Skill ("Python","https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png","https://www.python.org/") /* como la clase Developer ya contiene una array de skills, no hace falta crear una propiedad de clase Skills para acceder a la misma. Podemos crear una constante de tipo Skill e atribuirle un valor para crear el objeto con los valores deseados, que serán almacenado directamente el objeto Developer */
    const skillList2:Skill = new Skill ("JS","https://i1.wp.com/www.keesmel.com/wp-content/uploads/2020/09/js-logo.png?fit=500%2C500","https://www.javascript.com/") /* como la clase Developer ya contiene una array de skills, no hace falta crear una propiedad de clase Skills para acceder a la misma. Podemos crear una constante de tipo Skill e atribuirle un valor para crear el objeto con los valores deseados, que serán almacenado directamente el objeto Developer */


    this.developer1 = new Developer("Marcos","Rafael", 24, "male", "a very experimented dev",[skillList1]); /* aquí utiliza this. para hacer referencia a la propiedad de tipo Developer y así instanciar un objeto de la misma clase. Cuando llegamos a los parámetros de la array, utilizamos la array creada en la constante arrayList */
   /*  console.log(this.developer1) */
    this.developer2 = new Developer("Wright","Charly", 34, "male", "newby",[skillList2]); /* aquí utiliza this. para hacer referencia a la propiedad de tipo Developer y así instanciar un objeto de la misma clase. Cuando llegamos a los parámetros de la array, utilizamos la array creada en la constante arrayList */

    1
   
  }
  
}
