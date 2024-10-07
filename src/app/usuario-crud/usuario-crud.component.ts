import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../interfaces/Usuario';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario-crud',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './usuario-crud.component.html',
  styleUrl: './usuario-crud.component.css'
})
export class UsuarioCrudComponent {
  usuarios: Usuario[] = [];
  usuarioForm: FormGroup;
  editando = false;

  constructor(private fb: FormBuilder) {
    this.usuarioForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  agregarOActualizarUsuario() {
    if (this.usuarioForm.invalid) return;

    if (!this.editando) {
      const nuevoUsuario = { ...this.usuarioForm.value, id: this.usuarios.length + 1 };
      this.usuarios.push(nuevoUsuario);
    } else {
      const index = this.usuarios.findIndex(user => user.id === this.usuarioForm.value.id);
      if (index !== -1) {
        this.usuarios[index] = { ...this.usuarioForm.value };
        this.editando = false;
      }
    }

    this.usuarioForm.reset();
  }

  editarUsuario(usuario: Usuario) {
    this.usuarioForm.patchValue(usuario);
    this.editando = true;
  }

  eliminarUsuario(id: number) {
    this.usuarios = this.usuarios.filter(user => user.id !== id);
  }
}
