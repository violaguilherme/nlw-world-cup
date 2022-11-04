const cards = document.querySelector("#cards")

function createGame(player1, hour, player2) {
    return `
    <li>
        <img src="./assets/logo-${player1}.svg" alt="${player1} logo">
            <strong>${hour}</strong>
        <img src="./assets/logo-${player2}.svg" alt="${player2} logo">
    </li>
`
}

let delay = -0.5;
function createCard(date, weekday, games) {
    delay = delay + 0.5;
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${weekday}</span> </h2>
            <ul>
                ${games}
            </ul>
    </div>
`
}

cards.innerHTML = 
        createCard("24/11", "thursday", 
            createGame("switzerland", "07:00", "cameroon") +
            createGame("uruguay", "10:00", "southKorea") +
            createGame("portugal", "13:00", "ghana") +
            createGame("brazil", "16:00", "serbia")) 
            +
        createCard("28/11", "monday",
            createGame("cameroon", "07:00", "serbia") +
            createGame("southKorea", "10:00", "ghana") +
            createGame("brazil", "13:00", "switzerland") +
            createGame("portugal", "16:00", "uruguay")) 
            +
        createCard("02/12", "friday",
            createGame("southKorea", "12:00", "portugal") + 
            createGame("ghana", "12:00", "uruguay") +
            createGame("serbia", "16:00", "switzerland") +
            createGame("cameroon", "16:00", "brazil"))
 
    
