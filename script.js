let clickCount = 0;
let clickPower = 1; 
let upgradeCost = 10;
let upgradeMultiplier = 2;

function clickCookie() {
  clickCount += clickPower;
  document.getElementById('Clicks').innerText = clickCount;
}

function buyUpgrade() {
  if (clickCount >= upgradeCost) {
    clickCount -= upgradeCost;
    upgradeCost *= 10;
    upgradeMultiplier *= 1.5;
    clickPower *= upgradeMultiplier;  
    
    document.getElementById('Clicks').innerText = clickCount;
    document.getElementById('upgrade-cost').innerText = upgradeCost;

    alert("Uuendus ostetud!");
  } else {
    alert("Sul ei ole piisavalt küpsiseid, et osta uuendust!");
  }
}