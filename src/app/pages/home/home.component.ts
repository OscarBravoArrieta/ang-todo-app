 import { Component, signal } from '@angular/core'
 import { CommonModule } from '@angular/common'
 import { Task } from '../../models/task.models'

 @Component({
     selector: 'app-home',
     standalone: true,
     imports: [CommonModule],
     templateUrl: './home.component.html',
     styleUrl: './home.component.scss'
 })
 export class HomeComponent {
     title = 'todoapp'
     tasks = signal<Task[]>([
         {
             id: Date.now(),
             title: 'Crear proyecto',
             completed: false
         },
         {
             id: Date.now(),
             title: 'Estudiar escalas',
             completed: false
         },
         {
             id: Date.now(),
             title: 'Estudiar Angular signals',
             completed: false
         },
         {
             id: Date.now(),
             title: 'Estudiar el estado',
             completed: false
         }

     ])
     // -------------------------------------------------------------------------------------------
     changeHandler(event: Event) {

         const input = event.target as HTMLInputElement
         const newTask = input.value
         //this.tasks.update((tasks) => [...tasks, newTask])

     }
     // -------------------------------------------------------------------------------------------
     // -------------------------------------------------------------------------------------------

     deleteTask(index: number) {

        console.log(index);


         this.tasks.update((tasks) => tasks.filter((task, position) => position !== index))

     }

     //--------------------------------------------------------------------------------------------



 }
