const fs = require("fs").promises;
const { EOL } = require("os");
var readlineSync = require("readline-sync");

function getFiles(fileName) {
  // получаем файл по имени файла
  return fs.readFile(`./topics/${fileName}`, "utf-8").then((data) => {
    const ourFile = data.split("\n").filter((el) => el !== "");

    let quest = [];
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

console.log("\x1b[34mПривет!\n");
getFiles("chatgpt.txt");
// выводим темы на экран
const themes = ["1.Чат gpt", "2.Фильмы", "3.Капибары"];
console.log(themes.join(EOL));
// возможность выбора темы через консоль
const readline = readlineSync.question("Choose theme: ");

async function question(readline) {
  const fileName = function () {
    if (readline == 1) {
      return "chatgpt.txt";
    }
    if (readline == 2) {
      return "films.txt";
    }
    if (readline == 3) {
      return "kapibara.txt";
    }
  };

  let count = 0;
  const questArr = await getFiles(fileName());
  for (let i = 0; i < questArr.length; i += 1) {
    console.log(`${getQuestion(questArr, i)}`);
    const readlineAnswer = readlineSync.question("Your answer: \n");
    if (readlineAnswer.toLowerCase() === getAnswer(arrQuest, i).toLowerCase()) {
      console.log("Это правильный ответ! ✅");
      count += 10;
    } else {
      console.log(
        `Ответ не верный! Правильный ответ:${getAnswer(questArr, i)}`
      );
    }
  }
  console.log(`Ты молодец! Всего ${count} балл(ов)`);
}

question(readline);
//   let count = 1;
//   const arrQuest = await getFiles(fileName());
//   for (let i = 0; i < arrQuest.length; i += 1) {
//     console.log(`${getQuestion(arrQuest, i)}`);
//     const readlineAnswer = readlineSync.question("Your answer: ");
//     if (readlineAnswer.toLowerCase() === getAnswer(arrQuest, i).toLowerCase()) {
//       console.log("Это правильный ответ! ✅");
//       count += 10;
//     } else {
//       console.log(
//         `Ответ не верный! Правильный ответ:${getAnswer(arrQuest, i)}`
//       );
//     }
//   }
//   console.log(`Ты молодец!${count} баллов`);
// }

// question(readline);
// const questArr = await getFiles(fileName());
// for (let i = 0; i < questArr.length; i += 1){
//     console.log(`${getQuestion(questArr, i)}`);
//     const readlineAnswer = readlineSync.question(`ответ: ${EOL}`);
//     if (readlineAnswer.toLowerCase() === getAnswer(questArr, i).toLowerCase()) {
//         console.log('Это правильный ответ! ✅')
//         count += 10;
//     } else {
//         console.log(`Ответ не верный! Правильный ответ:${getAnswer(questArr, i)}`);
//     }
// } console.log(`Ты молодец!${count} баллов`);
// }
