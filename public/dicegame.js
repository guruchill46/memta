    let player1 = "Player1";
    let player2 = "Player2";
    let player1Turn = true;
    let player2Turn = false;
    let popup = document.getElementById('popup');
    let result = document.querySelector('h2');
    let diceNum1 = document.querySelector('.img1');
    let diceNum2 = document.querySelector('.img2');
    let mainTitleChange = document.querySelector('h1');
    let titleChange = document.querySelector('h3');
    let field1 = document.querySelector('p.player1');
    let field2 = document.querySelector('p.player2');
    let player1Win = document.querySelector('p.player1Win');
    let player2Win = document.querySelector('p.player2Win');
    let score1Win = document.querySelector('p.score1Win');
    let score2Win = document.querySelector('p.score2Win');
    let edit1 = document.getElementById('edit1');
    let edit2 = document.getElementById('edit2');
    let round = 1;
    let setId;
    let stopInt1;
    let stopInt1_array = [];
    let stopInt2;
    let stopInt2_array = [];

    document.getElementById('mybtn1').disabled= true;
    document.getElementById('mybtn2').disabled= true;
    
   

    function clickToPlay(){

        document.getElementById('mybtn1').disabled= false;
        document.getElementById('mybtn2').disabled= false;
        document.getElementById('playbtn').disabled= true;
        player1 = field1.childNodes[0].textContent;
        player2 = field2.childNodes[0].textContent;
        titleChange.innerHTML=`${player1} Turn`;
        mainTitleChange.innerHTML='Round 1';
        field1.contentEditable = false;
        field2.contentEditable = false;
        edit1.onclick = null;
        edit2.onclick = null;
        player1Turn = true;
        player2Turn = false;
        for(var i=0;i<stopInt1_array.length;i++){
            clearInterval(stopInt1_array[i]);
        }
    }

    let player1score = 0;
    let player2score = 0;

    
    function rollTheDice1(){
        document.getElementById('mybtn1').disabled= true;
        if(player1Turn===true&&round<21){

        setTimeout(()=>{diceNum1.classList.replace('img1','dice1gif');}
            ,0)       
        diceNum1.setAttribute('src', "pics/diceroll.gif");
         

        setId = setTimeout(()=>{
            

        randomNum1 = Math.ceil(Math.random()*6)

        diceNum1.classList.replace('dice1gif','img1');
        diceNum1.setAttribute('src', 'pics/dice'+randomNum1+'.png');

        if(randomNum1){

       player1score += randomNum1;
            }
        
        document.querySelector('p.score1').innerHTML = player1score;
        player2Turn = true;
        player1Turn = false;

        titleChange.innerHTML = `${player2} Turn`
        document.getElementById('mybtn2').disabled= false;        

    },2500)}
    }
    
    function rollTheDice2(){
        document.getElementById('mybtn2').disabled= true;

        if(player2Turn===true&&round<21){
        diceNum2.setAttribute('src', "pics/diceroll.gif");
        setTimeout(()=>{diceNum2.classList.replace('img2','dice1gif');}
            ,0)       
        diceNum2.setAttribute('src', "pics/diceroll.gif");

        setTimeout(()=>{

        randomNum2 = Math.ceil(Math.random()*6)
        diceNum2.classList.replace('dice1gif', 'img2')
        diceNum2.setAttribute('src', 'pics/dice'+randomNum2+'.png');

        if(randomNum2){

       player2score += randomNum2;
            }
        
        document.querySelector('p.score2').innerHTML = player2score;

        round= ++round;
        if(player1score>player2score&&round===21){
        result.innerHTML = `${player1} wins!`
        }
        else if(player2score>player1score&&round===21){
            result.innerHTML =`${player2} wins!`
        }
        else if(player1score===player2score&&round===21){
            result.innerHTML = 'Draw'
        }
        player1Turn = true;
        player2Turn = false;
        titleChange.innerHTML = `${player1} Turn`;

        
        if(round<21){
        mainTitleChange.innerHTML=`Round ${round}`;
        }
        if(round===21){
            mainTitleChange.innerHTML='Game End';
            titleChange.innerHTML= result.childNodes[0].textContent;
        }

        if(round===21){
        player1Win.innerHTML=player1;
        player2Win.innerHTML=player2;
        score1Win.innerHTML=player1score;
        score2Win.innerHTML=player2score;    
        document.getElementById('mybtn1').disabled = true;
        document.getElementById('mybtn2').disabled = true;
        popup.classList.add('open-popup');
        
    }
    document.getElementById('mybtn1').disabled= false;
    
       

    },2500)
}

    }

    function resetscore(){
            clearTimeout(setId);
            diceNum1.classList.replace('dice1gif','img1');
            diceNum2.classList.replace('dice1gif','img2');
            player1score=0;
            player2score=0;
            diceNum1.setAttribute('src', 'pics/dice6.png');
            diceNum2.setAttribute('src', 'pics/dice6.png');
            document.querySelector('p.score1').innerHTML = player1score;
            document.querySelector('p.score2').innerHTML = player2score;
            document.querySelector('h1').innerHTML = "Let's Play"
            popup.classList.remove('open-popup');
            document.getElementById('playbtn').disabled= false;
            round=1;
            edit1.onclick = edit1f;
            edit2.onclick = edit2f;
            titleChange.innerHTML = 'Total Rounds 20';
            document.getElementById('mybtn1').disabled= true;
            document.getElementById('mybtn2').disabled= true;

        }

    function edit1f(){
        field1.spellcheck= false;
        field1.contentEditable = field1.contentEditable === true ? false :true;
        let selectedText = window.getSelection();
        let selectedRange = document.createRange();
        selectedRange.setStart(field1.childNodes[0], field1.childNodes[0].length);
        selectedRange.collapse(true);
        selectedText.removeAllRanges();
        selectedText.addRange(selectedRange);
        field1.focus();
        stopInt1 = setInterval(()=>{
        if(field1.childNodes[0].length>13){
            field1.contentEditable = false;
            field1.innerHTML = field1.childNodes[0].textContent.slice(0,13)
            clearInterval(stopInt1);
            alert('Player name should be less than 13 Characters')
            
        }
       },500) 
       stopInt1_array.push(stopInt1);

    }
    
    function edit2f(){
            field2.spellcheck= false;
            field2.contentEditable = field2.contentEditable === true ? false :true;
            let selectedText = window.getSelection();
            let selectedRange = document.createRange();
            selectedRange.setStart(field2.childNodes[0], field2.childNodes[0].length);
            selectedRange.collapse(true);
            selectedText.removeAllRanges();
            selectedText.addRange(selectedRange);
            field2.focus();
            stopInt2 = setInterval(()=>{
                if(field2.childNodes[0].length>13){
                    field2.contentEditable = false;
                    field2.innerHTML = field2.childNodes[0].textContent.slice(0,13)
                    clearInterval(stopInt2);
                    alert('Player name should be less than 13 Characters')
                    
                    
                }
               },500)
               stopInt1_array.push(stopInt2);
    
        }

    

    function exit1(e){
        if(e.key==='Enter'){
            field1.contentEditable = false;
            
            if(field1.childNodes[0]===undefined){
                field1.innerHTML = player1;
                alert('Please enter a valid player name')
            }}
            
    }
    function exit2(e){
        if(e.key==='Enter'){
            field2.contentEditable = false;
            if(field2.childNodes[0]===undefined){
                field2.innerHTML = player2;
                alert('Please enter a valid player name')}
            }
    }

    function addValidName(){
        if(field1.childNodes[0]===undefined){
            field1.innerHTML = player1;
            alert('Please enter a valid player name')
        }
        if(field2.childNodes[0]===undefined){
            field2.innerHTML = player2;
            alert('Please enter a valid player name')}

    }