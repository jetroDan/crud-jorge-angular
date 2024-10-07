import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuarioCrudComponent } from "./usuario-crud/usuario-crud.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsuarioCrudComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jorge-crud-origin';
}
