import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  hideSideMenu = signal(true); // Señal que guarda el estado del menú (visible/no visible)

  // Función que cambiará el estado de la señal
  toogleSideMenu() {
    this.hideSideMenu.update((prevState) => !prevState);
  }
}
