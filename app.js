// https://calculator.swiftutors.com/specific-volume-calculator.html

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const specificVolumeRadio = document.getElementById('specificVolumeRadio');
const densityRadio = document.getElementById('densityRadio');

let specificVolume;
let density = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

specificVolumeRadio.addEventListener('click', function() {
  variable1.textContent = 'Density (kg/m³)';
  density = v1;
  result.textContent = '';
});

densityRadio.addEventListener('click', function() {
  variable1.textContent = 'Specific Volume (m³/kg)';
  specificVolume = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(specificVolumeRadio.checked)
    result.textContent = `Density = ${computeSpecificVolume().toFixed(5)} kg/m³`;

  else if(densityRadio.checked)
    result.textContent = `Specific Volume = ${computeDensity().toFixed(5)} m³/kg`;
})

// calculation

function computeSpecificVolume() {
  return 1 / Number(density.value);
}

function computeDensity() {
  return 1 / Number(specificVolume.value);
}