import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  users: Observable<User[]>;
  nome: String;

  constructor(private usuarioService: UsuarioService) {

  }

  ngOnInit() {

    this.usuarioService.getUsuarioList().subscribe(data => {
      this.users = data;
    });
  }

  deleteUsuario(id: Number) {
    this.usuarioService.deletarUsuario(id).subscribe(data => {

      this.usuarioService.getUsuarioList().subscribe(data => {
        this.users = data;
      });

    });

  }

  consutarUser() {
    this.usuarioService.consultarUser(this.nome).subscribe(data => {
      this.users = data;

    });
  }

}
