const message = document.querySelector('h1');
const button = document.querySelector('button');

const messageData = [
    "What do you call a hippie's wife? A Mississippi",
    "What did the duck say when she bought a lipstick? Put it on my bill!",
    "I hate Russian dolls. They're so full of themselves.",
    "What do you call a man with a rubber toe? Roberto!",
    "Where did the computer go dancing? The disc-o!",
    "What do bees do if they need a ride? Wait at the buzz stop!",
    "What do you give to a sick lemon? Lemon aid!",
    "What did the little mountain say to the bigger mountain? Hi Cliff!",
    "What do you call a monkey that loves Doritos? A chipmunk!",
    "Why did the can crusher quit his job? Because it was soda pressing!",
    "Why are there gates around cemeteries? Because people are dying to get in!",
    "What do you call a cow with two legs? Lean beef!",
    "Do you remember that joke I told you about my spine? It was about a weak back!",
    "I just went to an emotional wedding. Even the cake was in tiers.",
    "When's the best time to go to the dentist? Tooth-hurtie!",
    "What do you call a dangerous sun shower? A rain of terror!",
    "Why do seagulls fly over the sea? Because if they flew over the bay, they've bagels!",
    "What do you call a farm that makes bad jokes? Corny!",
    "Why do fish live in salt water? Because pepper makes them sneeze!",
    "What streets to ghosts haunt? Dead ends!",
    "What do you tell actors to break a leg? Because every play has a cast!",
    "What kind of dogs love car racing? Lap dogs!",
    "What do you call birds who stick together? Vel-crows.",
    "Today I gave my dead batteries away. They were free of charge."
]

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    
    return item;
}

button.onclick = () => {
    message.innerText = getRandomItem(messageData);
}
