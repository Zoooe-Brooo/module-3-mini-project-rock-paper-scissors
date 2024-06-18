const playGame = function() {

    const records = {
        wins: 0,
        ties: 0,
        losses: 0,
        count: {
            rock: 0,
            paper: 0,
            scissors:0,
        },
    };

    const choices = ['R', 'P', 'S'];

    let keepPlaying = true;

    while (keepPlaying) {

        let userChoice = window.prompt('Enter R, P, or S');

        if (!userChoice) {
            return;
        } 

        userChoice = userChoice.toUpperCase();

        if (!choices.includes(userChoice)) {
            window.alert('Please enter a valid choice.')
        } else {
            if (userChoice === 'R') {
                records.count.rock++;
            } else if (userChoice === 'P'){
                records.count.paper++;
            } else {
                records.count.scissors++;
            }
            
            const index = Math.floor(Math.random() *  choices.length);
            const computerChoice = choices[index];
    
            window.alert(`The computer chose ${computerChoice}`);
    
            if (userChoice === computerChoice) {
                records.ties++;
                window.alert("It's a tie!")
            } else if (
                (userChoice === 'R' && computerChoice === 'S') ||
                (userChoice === 'P' && computerChoice === 'R') ||
                (userChoice === 'S' && computerChoice === 'P')
            ) {
                records.wins++;
                window.alert('You win!');
            } else {
                records.losses++;
            window.alert('You lost!');
            }

            keepPlaying = window.confirm('Play again?')
        }
    }

    window.alert(
        `Records:
        Wins: ${records.wins}
        Losses: ${records.losses}
        Ties: ${records.ties}

        Your choices:
        Rock: ${records.count.rock}
        Paper: ${records.count.paper}
        Scissors: ${records.count.scissors}`
    )

};

playGame();