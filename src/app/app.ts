import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Accordian } from "./accordian/accordian";
import { ContactForm } from "./contact-form/contact-form";
import { Caurosel } from "./caurosel/caurosel";
import { Home } from "./home/home";
import { About } from "./about/about";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Avani');
}
