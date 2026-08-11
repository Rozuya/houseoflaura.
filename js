const messages = [
    "Laura, ton sourire et ta bonne humeur illuminent chacune de nos semaines sur Twitch ! 💜",
    "Merci pour ta gentillesse et ta passion. Ne change absolument rien à ce que tu fais ✨",
    "De la part de toute la commu (et de Rozuya !) : merci de nous faire vibrer à chaque live 🚀",
    "Une streameuse en or massif, tout simplement. On est là pour la suite ! 🌟",
    "Il n'y a pas meilleur endroit pour passer ses soirées que sur ton live 🌸"
];

document.getElementById('loveBtn').addEventListener('click', () => {
    const box = document.getElementById('message-box');
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    box.style.opacity = 0;
    setTimeout(() => {
        box.textContent = randomMsg;
        box.style.opacity = 1;
    }, 200);
});

