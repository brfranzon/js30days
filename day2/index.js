const handsecond = document.querySelector('.hand-second');
const handminutes = document.querySelector('.hand-minutes');
const handhour = document.querySelector('.hand-hour');

setInterval(() => {
    // Sekunden jetzt
    const jetzt = new Date();
    sekunden = jetzt.getSeconds();
    sekunden_winkel = (sekunden * 360) / 60 + 90;
    handsecond.innerHTML = `${sekunden}`;
    handsecond.style.transform = `rotate(${sekunden_winkel}deg)`;

    // Minutes 
    const minuten = jetzt.getMinutes();
    minuten_winkel = (minuten * 360) / 60 + ((sekunden / 60) * 6) + 90;
    handminutes.innerHTML = `${minuten}`;
    handminutes.style.transform = `rotate(${minuten_winkel}deg)`;

    // hour
    const stunden = jetzt.getHours();
    handhour.innerHTML = `${stunden}`;
    stunden_winkel = ((stunden/12)*360) + ((minuten/60) * 30) + 90;
    handhour.style.transform = `rotate(${stunden_winkel}deg)`;

}, 1000);











