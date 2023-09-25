
import { Skill } from "./Skill.model";

export class Developer{

   constructor (
   public lastname:string, 
   public firstname:string, 
   public age:number, 
   public gender:string, 
   public bio:string, 
   public skills: Skill[]){ /* aquí decidimos cómo vamos a mostrar la clase Skill, en este caso, una array. La array serán objetos de tipo skill de esta estructura [{nombre, logo, sitio}, {nombre, logo, sitio}...] */

   }


}
