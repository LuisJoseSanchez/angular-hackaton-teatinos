import { Component, OnInit } from '@angular/core';

declare var html2canvas : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Esta es la web que hay que capturar.';
  
  OnInit() {
    html2canvas(document.getElementById("testdiv"), {
            onrendered: function(canvas) {
                var myImage = canvas.toDataURL("image/png");
                window.open(myImage);
            }
        });
  }
}
