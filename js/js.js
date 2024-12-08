// -----------------------------------------------Задание 1 Объекты стр 82-----------------------------------------------//

let player1 = {
    name: 'Kirill',
    score: 0
}

let player2 = {
    name: 'Sasha',
    score: 0
}

let player3 = {
    name: 'Slava',
    score: 0
}
player1.score = 3
player2.score = 6
player3.score = 9
document.write('Счет игрока номер "1" - '+ player1.score + "<br>", 'Счет игрока номер "2" - ' + player2.score + "<br>", 'Счет игрока номер "3" - ' + player3.score + "<br>")

// -----------------------------------------------Задание 2 Объекты стр 82-----------------------------------------------//

let myCrazyObject = {
    "name": "Нелепый объект",
    "some array": [7, 9, { purpose: "путаница", number: 123}, 3.3],
    "random animal": "Банановая акула"
};
console.log(myCrazyObject["some array"][2].number)
document.write(myCrazyObject["some array"][2].number)

// -----------------------------------------------Висиоца(Чтобы увидить первые 2 задания нужно пройти игру)-----------------------------------------------//

let words = [
    "программа",
    "макака",
    "прекрасный",
    "оладушек",
    "блины",
    "мышка",
    "компьютер",
    "еда"
];

let word = words[Math.floor(Math.random() * words.length)];
word = word.toLowerCase();

let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = word.length;
let maxAttempts = 10;
let attemptsLeft = maxAttempts;

while (remainingLetters > 0 && attemptsLeft > 0) {
    alert(answerArray.join(" "));
    alert(`У вас осталось попыток: ${attemptsLeft}`);

    let guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
    if (guess == null) {
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите одиночную букву.");
    } else {
        guess = guess.toLowerCase();
        let correctGuess = false;
        let alreadyGuessed = false;

        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                if (answerArray[j] === "_") {
                    answerArray[j] = guess;
                    remainingLetters--;
                    correctGuess = true;
                } else {
                    alreadyGuessed = true;
                }
            }
        }

        if (correctGuess) {
            alert(`Правильно! Вы угадали букву: ${guess}`);
        } else if (alreadyGuessed) {
            alert(`Вы уже угадали букву: ${guess}. Попробуйте другую.`);
        } else {
            attemptsLeft--;
            alert(`Неправильно! У вас осталось попыток: ${attemptsLeft}`);
        }
    }
}

if (remainingLetters === 0) {
    alert(answerArray.join(" "));
    alert("Поздравляем! Вы угадали слово: " + word);
} else {
    alert("Игра окончена! Загаданное слово было: " + word);
}