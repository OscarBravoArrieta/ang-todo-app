import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.scss'
})
export class LabsComponent {

     disabled = true
     title = 'todoapp'

     myfirstSignal = signal('Oscar')
     tasks = signal([
         'Insertar el cli en Angular',
         'Crear proyecto',
         'Crear componentes'
     ])



     clickHandler() {
         alert('Hola')
     }

     keyBoardHandler(event: KeyboardEvent) {
         const input = event.target as HTMLInputElement
         console.log(input.value)

     }
}
