 import { Component, signal } from '@angular/core'
 import { CommonModule } from '@angular/common'
 import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms'


@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.scss'
})
export class LabsComponent {
     constructor() {
         this.colorCtrl.valueChanges.subscribe(value => {
             console.log(value)
         })
     }

     disabled = true
     title = 'todoapp'

     myfirstSignal = signal('Oscar')
     tasks = signal([
         'Insertar el cli en Angular',
         'Crear proyecto',
         'Crear componentes'
     ])

     colorCtrl = new FormControl()
     widthCtrl = new FormControl(50, {
         nonNullable: true
     })

     nameCtrl = new FormControl("abc", {
         nonNullable: true,
         validators: [
             Validators.required,
             Validators.minLength(3),
         ]
     })




     clickHandler() {
         alert('Hola')
     }

     keyBoardHandler(event: KeyboardEvent) {
         const input = event.target as HTMLInputElement
         console.log(input.value)

     }
}
