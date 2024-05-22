import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css'
})
export class LinksComponent {

}
