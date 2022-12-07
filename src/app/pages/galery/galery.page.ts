import { Component, OnInit } from '@angular/core';
import { IChild } from '../shared/interface/IChild';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.page.html',
  styleUrls: ['./galery.page.scss'],
})
export class GaleryPage implements OnInit {

  listChild: IChild[] = [];

  constructor() { }

  ngOnInit() {

    this.listChild = [
      {id: 1, foto: '/assets/menino1.jpg', nome: 'Lucas Adriano Dias', idade: 5, sala: '5 a 10 Anos', responsavel: 'Nahyara Amanda', observacao: 'Alergia a leite'},
      {id: 2, foto: '/assets/menino2.jpg', nome: 'Alefe Patrick Dias', idade: 3, sala: '3 a 5 Anos', responsavel: 'Nahyara Amanda', observacao: ''},
      {id: 3, foto: '/assets/menino4.jpg', nome: 'Bruno Eduardo Moraes', idade: 7, sala: '5 a 10 Anos', responsavel: 'Nahyara Amanda', observacao: ''},
      {id: 2, foto: '/assets/menina3.jpg', nome: 'Leticia Felicia Dias', idade: 6, sala: '3 a 5 Anos', responsavel: 'Nahyara Amanda', observacao: ''},
    ]

  }

}
