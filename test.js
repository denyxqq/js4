

const number1 = Number(prompt("Введіть число"));
const number2 = Number(prompt("Введіть число"));

if (number1 + number2 === 10) {
    alert("буде 10")
}else if (number1 + number2 >= 10){
    alert("ваше число більше 10")
}else if (number1 + number2 <= 10){
    alert("ваше число менше 10")}
// else(number1 + number2 != 10) {
//     alert("це не число")
// } чому не працює


const blank1 = prompt("Введіть текст");
const blank2 = prompt("Введіть текст");
if (blank1 && blank2){  
    alert("поле заповнене");
}else{
    alert("заповніть поле з текстом");
}

const js = prompt("напиши JavaScript").toLowerCase()
if (js === "Javascript".toLowerCase()){
    alert("у тексті є слово JavaScript")
}else {
    alert("текст не містить слово JavaScript")
}

const numbers = prompt("Введіть число від 0 до 20");
if (10 > numbers ){
    alert("Число не входить в діапазон від 10 до 20");
}else if (10 < numbers < 20){
    alert("Число входить в діапазон від 10 до 20")
}


