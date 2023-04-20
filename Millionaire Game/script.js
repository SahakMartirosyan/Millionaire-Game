let leftBox = document.querySelector('.leftBox');
let rightBox = document.querySelector('.rightBox');
let BoxItems = document.querySelectorAll('.BoxItems');
let GamePlace = document.querySelector('.gamePlace');
let Question = document.querySelector('.questions');
let Answer = document.querySelectorAll('.answers');

//Start Game
let button = document.createElement('button');
button.classList.add('Start');
button.textContent = 'Start Game';
rightBox.append(button);

//Next Game
let nextbutton = document.createElement('button');
nextbutton.classList.add('Next');
nextbutton.innerHTML = 'NEXT';

let QuestionArrey= ["Ո՞րն է Իսպանիայի մայրաքաղաքը","Ո՞րն է աշխարհի ամենաերկար գետը","Քանի՞ վարկյան է 1 ժամը","Աշխարհի ամենահարուստ մարդն է","Ո՞րն աշխարհի ամենամեծ կենդանին"];

let AnswerArrey= [
    [
        "Բարսելոնա",
        "Նապոլի",
        "Մադրիդ",
        "Լիսաբոն"
    ],
    [
        "Վոլգա",
        "Նեղոս",
        "Հրազդան",
        "Վիկտորիա"
    ],
    [
        "3600",
        "2600",
        "3560",
        "3650"
    ],
    [
        "Ջեֆ Բեզոս",
        "Լարրի Էլիսոն",
        "Ուորեն Բաֆետ",
        "Իլոն Մասկ"
    ],
    [
        "Փիղ",
        "Կապույտ Կետ",
        "Ընձուխտ",
        "Գետաձի"
    ],
];


button.onclick = function () {
    button.remove();
	 GamePlace.style.display = 'flex';
    FirstLevel();
};


function FirstLevel(){
let level = 0;
BoxItems[level].style.background = 'gold';
Question.innerHTML = `${QuestionArrey[level]}`;
Answer.forEach((item, i) =>{
	item.innerHTML = `${AnswerArrey[level][i]}`;
  	item.onclick = function(){
  		 if(i == 2){
      	item.style.background = 'green';
         rightBox.append(nextbutton);
         nextbutton.onclick = function(){
         	SecondLevel();
            /* BoxItems[level].style.background = 'transparent'; */
            item.style.background = 'transparent';
         }
   	 }
   	 else{
      	item.style.background = 'red';
         let h2 = document.createElement('h2');
			h2.classList.add('h2');
			h2.textContent = 'GAME OVER';
			rightBox.append(h2);
   	 }
 	};
  });
}

function SecondLevel(){
let level = 1;
BoxItems[level].style.background = 'gold';
Question.innerHTML = `${QuestionArrey[level]}`;
Answer.forEach((item, i) =>{
	item.innerHTML = `${AnswerArrey[level][i]}`;
  	item.onclick = function(){
  		 if(i == 1){
      	item.style.background = 'green';
         rightBox.append(nextbutton);
         nextbutton.onclick = function(){
         	ThirdLevel();
            /* BoxItems[level].style.background = 'transparent'; */
            item.style.background = 'transparent';
         }
   	 }
   	 else{
      	item.style.background = 'red';
         let h2 = document.createElement('h2');
			h2.classList.add('h2');
			h2.textContent = 'GAME OVER';
			rightBox.append(h2);
   	 }
 	};
  });
}

function ThirdLevel(){
let level = 2;
BoxItems[level].style.background = 'gold';
Question.innerHTML = `${QuestionArrey[level]}`;
Answer.forEach((item, i) =>{
	item.innerHTML = `${AnswerArrey[level][i]}`;
  	item.onclick = function(){
  		 if(i == 0){
      	item.style.background = 'green';
         rightBox.append(nextbutton);
         nextbutton.onclick = function(){
         	FourthLevel();
            /* BoxItems[level].style.background = 'transparent'; */
            item.style.background = 'transparent';
         }
   	 }
   	 else{
      	item.style.background = 'red';
         let h2 = document.createElement('h2');
			h2.classList.add('h2');
			h2.textContent = 'GAME OVER';
			rightBox.append(h2);
   	 }
 	};
  });
}

function FourthLevel(){
let level = 3;
BoxItems[level].style.background = 'gold';
Question.innerHTML = `${QuestionArrey[level]}`;
Answer.forEach((item, i) =>{
	item.innerHTML = `${AnswerArrey[level][i]}`;
  	item.onclick = function(){
  		 if(i == 3){
      	item.style.background = 'green';
         rightBox.append(nextbutton);
         nextbutton.onclick = function(){
         	FivthLevel();
            /* BoxItems[level].style.background = 'transparent'; */
            item.style.background = 'transparent';
         }
   	 }
   	 else{
      	item.style.background = 'red';
         let h2 = document.createElement('h2');
			h2.classList.add('h2');
			h2.textContent = 'GAME OVER';
			rightBox.append(h2);
   	 }
 	};
  });
}

function FivthLevel(){
let level = 4;
BoxItems[level].style.background = 'gold';
Question.innerHTML = `${QuestionArrey[level]}`;
Answer.forEach((item, i) =>{
	item.innerHTML = `${AnswerArrey[level][i]}`;
  	item.onclick = function(){
  		 if(i == 1){
      	item.style.background = 'green';
         rightBox.append(nextbutton);
         nextbutton.onclick = function(){
         	END();
            /* BoxItems[level].style.background = 'transparent'; */
            GamePlace.style.display = 'none';
         }
   	 }
   	 else{
      	item.style.background = 'red';
         let h2 = document.createElement('h2');
			h2.classList.add('h2');
			h2.textContent = 'GAME OVER';
			rightBox.append(h2);
   	 }
 	};
  });
}

function END(){
let level = 5;
BoxItems[level].style.background = 'gold';
nextbutton.remove();
let h1 = document.createElement('h1');
h1.classList.add('h1');
h1.textContent = 'YOU WIN 20.000';
rightBox.append(h1);
}











