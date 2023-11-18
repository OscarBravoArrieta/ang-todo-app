 import { Component, signal } from '@angular/core'
 import { CommonModule } from '@angular/common'

 @Component({
     selector: 'app-home',
     standalone: true,
     imports: [CommonModule],
     templateUrl: './home.component.html',
     styleUrl: './home.component.scss'
 })
 export class HomeComponent {
     title = 'todoapp'
     tasks = signal([
         'Insertar el cli en Angular',
         'Crear proyecto',
         'Crear componentes'
     ])


 }
