const readline = require("readline");
const chalk = require("chalk");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(
  chalk.yellow( "Dear Mr Visitor, We are pleased to inform you that you have been accepted at Hogwarts School of Witchcraft and Wizardry. Lets see are Worthy for gryfindor or not ?\n"));
let score = 0;
rl.question(
  chalk.green("Which famous rugby player was Hagrid actor Robbie Coltrane's stunt double?\n"),
  (answerOne) => {
    console.log(
      chalk.yellow.bold("Your answer:") +
        answerOne.toLowerCase() +
        "." +
        chalk.yellow.bold(" Correct answer:") +
        "martin bayfield\n"
    );
    if (answerOne.toLowerCase() === "martin bayfield") {
      score++;
    } else {
      score--;
    }
    rl.question(
      chalk.green("What is the name of Harry Potter's owl?\n"),
      (answerTwo) => {
        console.log(
          chalk.yellow.bold("Your answer:") +
            answerTwo.toLowerCase() +
            "." +
            chalk.yellow.bold(" Correct answer:") +
            "hedwig\n"
        );
        if (answerTwo.toLowerCase() === "hedwig") {
          score++;
        } else {
          score--;
        }
        rl.question(
          chalk.green("Name Luna Lovegood's father.\n"),
          (answerThree) => {
            console.log(
              chalk.yellow.bold("Your answer:") +
                answerThree.toLowerCase() +
                "." +
                chalk.yellow.bold(" Correct answer:") +
                "xenophillius lovegood\n"
            );
            if (answerThree.toLowerCase() === "xenophillius lovegood") {
              score++;
            } else {
              score--;
            }
            rl.question(
              chalk.green("Who is Draco Malfoy's dad?\n"),
              (answerFour) => {
                console.log(
                  chalk.yellow.bold("Your answer:") +
                    answerFour.toLowerCase() +
                    "." +
                    chalk.yellow.bold(" Correct answer:") +
                    "lucius malfoy\n"
                );
                if (answerFour.toLowerCase() === "lucius malfoy") {
                  score++;
                } else {
                  score--;
                }
                rl.question(
                  chalk.green(
                    "Who did Ron Weasley's pet rat used to belong to?\n"
                  ),
                  (answerFive) => {
                    console.log(
                      chalk.yellow.bold("Your answer:") +
                        answerFive.toLowerCase() +
                        "." +
                        chalk.yellow.bold(" Correct answer:") +
                        "his brother percy\n"
                    );
                    if (answerFive.toLowerCase() === "his brother percy") {
                      score++;
                    } else {
                      score--;
                    }
                    console.log(chalk.bold.bgMagenta("Your score is " + score));
                    if (score >= 3) {
                      console.log(chalk.blue.bold("hahah..!! Mr. Visitor your Worthy to join Griffindor. Congo"));
                    } else {
                      console.log(
                        chalk.blue.bold(
                          "You Maglu....Your are not Worthy to join Hogwarts."
                        )
                      );
                    }
                    console.log("see you next year.");
                    rl.close();
                  }
                );
              }
            );
          }
        );
      }
    );
  }
);
