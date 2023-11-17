import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  
  @Input() sideNavStatus: boolean = false;

  list = [
    {
      number: '1',
      name: 'home',
      icon: 'fa-solid fa-house',
      url: '/home'
    },
    {
      number: '2',
      name: '¿Quienes Somos?',
      icon: 'fa-solid fa-users',
      url: 'https://youtu.be/zblLtts5bho'
    },
    {
      number: '3',
      name: 'Mensaje Institucional',
      icon: 'fa-solid fa-bullhorn',
      url: 'https://www.utleon.edu.mx/rectora-estudiante'
    },
    {
      number: '4',
      name: 'Noticias',
      icon: 'fa-solid fa-newspaper',
      url: '/home'
    },
    {
      number: '5',
      name: 'Biblioteca Digital',
      icon: 'fa-solid fa-book-open-reader',
      url: '/home'
    },
    {
      number: '6',
      name: 'Normativa',
      icon: 'fa-solid fa-scale-balanced',
      url: 'https://www.utleon.edu.mx/politicas-lineamientos'
    },
    {
      number: '7',
      name: '¿Quieres Trabajar en UTL?',
      icon: 'fa-solid fa-briefcase',
      url: 'https://sito.utleon.edu.mx/jsp/reclutamiento/muestra_convocatoria_general.jsp'
    },
    {
      number: '8',
      name: 'Transparencia',
      icon: 'fa-solid fa-eye',
      url: 'https://www.utleon.edu.mx/buzon-adm'
    },
    {
      number: '9',
      name: 'Calendario',
      icon: 'fa-regular fa-calendar',
      url: 'https://www.utleon.edu.mx/resource/img/CALENDARIO%20LE%C3%93N.jpg'
    },
    {
       number: '10',
       name: 'Sito',
       icon: 'fa-solid fa-browser',
       url: 'https://sito.utleon.edu.mx/'
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
      
  }
}
