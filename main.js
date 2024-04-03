#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 9506;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "ENTER YOUR PIN NUMBER",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        myBalance -= amountAns.amount;
        console.log(`your remaining balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "fast cash") {
        let optionAns = await inquirer.prompt([{
                name: "option",
                message: "select one option",
                type: "list",
                choices: ["5000", "200", "6000", "1000"],
            }]);
        myBalance -= optionAns.option;
        console.log(`your remaining balance is :${myBalance}`);
    }
}
else {
    console.log("incorect pin number");
}
;
