import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IChild } from '../shared/interface/IChild';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  child: IChild = {} as IChild;
  childId!: number;

  constructor(
    private router: ActivatedRoute
  ) {
    this.childId = parseInt(this.router.snapshot.paramMap.get('id')!);

    this.child.foto = '/assets/menino1.jpg';
    this.child.id = 1;
    this.child.nome = 'Lucas Adriano Dias';
    this.child.idade = 5;
    this.child.sala = '5 a 10 Anos';
    this.child.responsavel = 'Nahyara Amanda';
    this.child.observacao = 'Intolerancia a lactóse'
  }

  ngOnInit() {

  }


}
