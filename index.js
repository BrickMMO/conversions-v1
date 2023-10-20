function convertLength(unitChanged) {
  const studs = document.getElementById("studs");
  const grids = document.getElementById("grids");
  const baseplates = document.getElementById("baseplates");
  const inches = document.getElementById("inches");
  const feet = document.getElementById("feet");
  const millimeters = document.getElementById("millimeters");
  const centimeters = document.getElementById("centimeters");
  const meters = document.getElementById("meters");

  const value = parseFloat(document.getElementById(unitChanged).value);

  if (isNaN(value)) {
    return;
  }

  switch (unitChanged) {
    case "millimeters":
      studs.value = (value * 0.125).toFixed(3);
      grids.value = ((value * 0.125) / 16).toFixed(3);
      baseplates.value = ((value * 0.125) / 48).toFixed(3);
      inches.value = (value * 0.0393701).toFixed(3);
      feet.value = (value * 0.00328084).toFixed(3);
      centimeters.value = (value / 10).toFixed(3);
      meters.value = (value / 1000).toFixed(3);
      break;
    case "studs":
      studs.value = (value * 1).toFixed(3);
      grids.value = (value / 16).toFixed(3);
      baseplates.value = (value / 48).toFixed(3);
      inches.value = (value * 0.315).toFixed(3);
      feet.value = (value * 0.026).toFixed(3);
      millimeters.value = (value * 8).toFixed(3);
      centimeters.value = (value * 0.8).toFixed(3);
      meters.value = (value * 0.008).toFixed(3);
      break;
    case "grids":
      studs.value = (value * 16).toFixed(3);
      baseplates.value = (value * 0.333).toFixed(3);
      inches.value = (value * 6.3).toFixed(3);
      feet.value = (value * 0.525).toFixed(3);
      millimeters.value = (value * 160).toFixed(3);
      centimeters.value = (value * 16).toFixed(3);
      meters.value = (value * 0.16).toFixed(3);
      break;
    case "baseplates":
      studs.value = (value * 48).toFixed(3);
      grids.value = (value * 3).toFixed(3);
      inches.value = (value * 37.8).toFixed(3);
      feet.value = (value * 3.15).toFixed(3);
      millimeters.value = (value * 960).toFixed(3);
      centimeters.value = (value * 96).toFixed(3);
      meters.value = (value * 0.96).toFixed(3);
      break;
    case "inches":
      studs.value = (value * 3.175).toFixed(3);
      grids.value = (value * 0.198).toFixed(3);
      baseplates.value = (value * 0.001).toFixed(3);
      feet.value = (value * 0.083).toFixed(3);
      millimeters.value = (value * 25.4).toFixed(3);
      centimeters.value = (value * 2.54).toFixed(3);
      meters.value = (value * 0.0254).toFixed(3);
      break;
    case "feet":
      studs.value = (value * 36).toFixed(3);
      grids.value = (value * 2.25).toFixed(3);
      baseplates.value = (value * 0.03).toFixed(3);
      inches.value = (value * 12).toFixed(3);
      millimeters.value = (value * 304.8).toFixed(3);
      centimeters.value = (value * 30.48).toFixed(3);
      meters.value = (value * 0.3048).toFixed(3);
      break;
    case "meters":
      studs.value = (value * 100).toFixed(3);
      grids.value = (value * 6.25).toFixed(3);
      baseplates.value = (value * 0.04).toFixed(3);
      inches.value = (value * 39.37).toFixed(3);
      feet.value = (value * 3.28).toFixed(3);
      millimeters.value = (value * 1000).toFixed(3);
      centimeters.value = (value * 100).toFixed(3);
      break;
    case "centimeters":
      studs.value = (value * 1.25).toFixed(3);
      grids.value = (value * 0.0781).toFixed(3);
      baseplates.value = (value * 0.0005).toFixed(3);
      inches.value = (value * 0.393).toFixed(3);
      feet.value = (value * 0.0328).toFixed(3);
      millimeters.value = (value * 10).toFixed(3);

      meters.value = (value * 0.01).toFixed(3);
      break;
  }
}

//   case "studs":
//         studs.value = (value * 1).toFixed(3);
//         grids.value = (value / 16).toFixed(3);
//         baseplates.value = (value / 48).toFixed(3);
//         inches.value = (value * 0.315).toFixed(3);
//         feet.value = (value * 0.026).toFixed(3);
//         millimeters.value = (value * 8).toFixed(3);
//         centimeters.value = (value * 0.8).toFixed(3);
//         meters.value = (value * 0.008).toFixed(3);
//         break;
