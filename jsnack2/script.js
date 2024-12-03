const guestList = [
    'Nathan',
    'Christian',
    'Fabio',
    'Phil',
    'Carlo',
    'Lewis',
    'Luca'
  ];

  const userName = prompt("Inserisci il tuo nome");

  for (let i = 0; i < guestList.length; i++) {
      if (userName === guestList[i]) {
          alert("Sei in lista! Entra pure!");
          break;
      }
  
      if (i === guestList.length - 1) {
          alert("Non sei sulla lista! Vattene via!");
      }
  }