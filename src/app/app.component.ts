import { Component, OnInit } from '@angular/core';
import * as Blotter from "../assets/blotter.min.js";

declare var Blotter: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  changeText!: boolean;



  constructor() {
    this.changeText = (Math.random() < 0.5);
    console.log(this.changeText);
   }

  ngOnInit(): void {
    this.probando();
    
  }

  probando() {

    // Graphic designer
    var graphic = document.getElementById("graph");
    var web = document.getElementById("web");

    var text = new Blotter.Text("GRAPHIC DESIGNER", {
      family: 'Poppins',
      size: 100,
      fill: "#000",
      paddingLeft: 80,
      paddingRigth: 80,
      paddingTop: 30,
      paddingBottom: 30,
  });

  // var material = new Blotter.LiquidDistortMaterial();
  //   material.uniforms.uSpeed.value = 0.5;
  //   material.uniforms.uVolatility.value = 0.1;
  //   material.uniforms.uSeed.value = 0.5;

  var material = new Blotter.ChannelSplitMaterial();
    material.uniforms.uOffset.value = 0.05;
    material.uniforms.uRotation.value = 50;
    material.uniforms.uApplyBlur.value = 1;
    material.uniforms.uAnimateNoise.value = 0.3 ;
  
  // Flies Material:
  // var material = new Blotter.FliesMaterial();
  // material.uniforms.uPointCellWidth.value = 0.01;
  // material.uniforms.uPointRadius.value = .6;
  // material.uniforms.uSpeed.value = 2;

  var blotter = new Blotter(material, { texts: text })

  var scope = blotter.forText(text);

  console.log('scope:', scope);

  scope.appendTo( graphic );

  // Add mousemove effect
  document.onmousemove = moveIt;

  function moveIt(event) {
    material.uniforms.uRotation.value = (event.clientX * .1);
    material.uniforms.uOffset.value = (event.clientX * .0001);
  }

// Frontend developer
var web = document.getElementById("web");

// var textFront = new Blotter.Text("FRONTEND DEVELOPER", {
//   family: 'Poppins',
//   size: 100,
//   fill: "#000",
//   paddingLeft: 80,
//   paddingRigth: 80,
//   paddingTop: 30,
//   paddingBottom: 30,
// });

var textFront = new Blotter.Text(`FRONTEND DEVELOPER`, {
  family: 'Poppins',
  size: 100,
  leading: 1,
  fill: "#000",
  weight: 700,
  paddingLeft: 80,
  paddingRigth: 80,
  paddingTop: 80,
  paddingBottom: 80,
});

// var materialFront = new Blotter.FliesMaterial();
// materialFront.uniforms.uPointCellWidth.value = 0.01;
// materialFront.uniforms.uPointRadius.value = .6;
// materialFront.uniforms.uSpeed.value = 2;

var materialFront = new Blotter.LiquidDistortMaterial();
  materialFront.uniforms.uSpeed.value = 0.2;
  materialFront.uniforms.uVolatility.value = 0.09;
  materialFront.uniforms.uSeed.value = 1;

var blotter = new Blotter(materialFront, { texts: textFront })

var scope = blotter.forText(textFront);

console.log('scope:', scope);

scope.appendTo(document.body);
scope.appendTo( web );
}

  }

  

