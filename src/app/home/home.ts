import { Component } from '@angular/core';
import { Caurosel } from "../caurosel/caurosel";
import { Accordian } from "../accordian/accordian";

@Component({
  selector: 'app-home',
  imports: [Caurosel, Accordian],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
