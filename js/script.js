// Copyright (c) 2022 Theo Rafuse All rights reserved
// Created by: Theo Rafuse
// Created on: Mar 2023
// This file contains the JS functions for index.html

function enterClicked() {
  let radius = parseFloat(document.getElementById("r-value").value);
  
  //This is the math for the first part of the formula
  let volume = 4/3 * Math.PI * radius ** 3
  let volumeRounded = volume.toFixed(2)
  
  //The Result
  document.getElementById('volume-info').innerHTML = "The total volume of the Sphere is " + (volumeRounded) + "cm<sup>3</sup>."
}