const readlineSync = require('readline-sync');
const { EOL } = require('os');
const path = require('path');
const fs = require('fs').promises;

// const userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');

function getFiles(fileName) {
  // получаем файл по имени файла
  return fs.readFile(`./themes/${fileName}`, 'utf-8').then((data) => {
    const ourFile = data.split('\n').filter((el) => el !== '');
    const quest = [];

    for (let i = 0; i < ourFile.length; i += 2) {
      quest.push({ question: ourFile[i], answer: ourFile[i + 1] });
    }
    return quest;
  });
}
function getQuestion(arr, index) {
  return arr[index].question;
}
function getAnswer(arr, index) {
  return arr[index].answer;
}

console.log('\x1b[34mПривет!\n');
getFiles('chatgpt.txt');

// Vera

const themes = ['1.Чат gpt', '2.Фильмы', '3.Капибары', '4.Рим', '5.Гагик'];
console.log(themes.join(EOL));
// возможность выбора темы через консоль
const readline = readlineSync.question('\nВыберите тему: ');

async function question(readline) {
  const fileName = function () {
    if (readline == 1) {
      return 'chatgpt.txt';
    }
    if (readline == 2) {
      return 'films.txt';
    }
    if (readline == 3) {
      return 'kapibara.txt';
    }
    if (readline == 4) {
      return 'Rome.txt';
    }
    if (readline == 5) {
      return 'gagik.txt';
    }
  };

  let count = 10;
  const questArr = await getFiles(fileName());

  for (let i = 0; i < questArr.length; i += 1) {
    console.log(`${getQuestion(questArr, i)}`);
    const readlineAnswer = readlineSync.question('Ваш ответ: \n');
    if (readlineAnswer.toLowerCase() === getAnswer(questArr, i).toLowerCase()) {
      console.log(`Это правильный ответ! ✅ Баллы - ${count}\n`);
      count += 10;
    } else {
      console.log(
        `\nОтвет не верный! \nПравильный ответ: ${getAnswer(questArr, i)}\n`
      );
    }
  }
  console.log(`Ты молодец! Всего ${count - 10} балл(ов)\n`);
}

question(readline);
