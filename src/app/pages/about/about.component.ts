import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/service/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public _infoService: InfoPaginaService) { }

  ngOnInit() {
  }

}
