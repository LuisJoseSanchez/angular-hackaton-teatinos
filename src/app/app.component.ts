import { Component, OnInit } from '@angular/core';

declare var html2canvas;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Esta es la web que hay que capturar.';
  
  //html2canvas = require('assets/')

  ngOnInit() {
    /*
    console.log('Entra en OnInit');
    html2canvas(document.getElementById("testdiv"), {
      onrendered: function(canvas) {
          var myImage = canvas.toDataURL("image/png");
          window.open(myImage);
      }
    });*/
  }

  capturarPantalla() {
    console.log('Entra en capturarPantalla');
    html2canvas(document.getElementById("testdiv"), {
      onrendered: function(canvas) {
          var myImage = canvas.toDataURL("image/png");
          window.open(myImage);
      }
    });
  }
}
