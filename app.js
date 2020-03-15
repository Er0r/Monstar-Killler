const ATTACK_VALUE = 10; 
const MONSTER_ATTACK_VALUE= 21;
const STRONG_ATTACK_VALUE=17;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
const HEAL_VALUE=20;

adjustHealthBars(chosenMaxLife);
let flag=0;
function attackHandler(){
    if(flag==0) {
        const damage = dealMonsterDamage(ATTACK_VALUE);
        currentMonsterHealth -= damage;
        const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
        currentPlayerHealth -= playerDamage;
    }

    if(currentMonsterHealth <= 0){
        alert('You won!');
        flag=1;
    } else if(currentPlayerHealth<=0) {
        alert('You Lost!');
        flag=1;
    } else if(currentPlayerHealth <=0 && currentMonsterHealth<=0){
        alert('You have a draw!');
    }
}
function strongAttackHandler(){
    if(flag==0) {
        const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);
        currentMonsterHealth -= damage;
        const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
        currentPlayerHealth -= playerDamage;
    }

    if(currentMonsterHealth <= 0){
        alert('You won!');
        flag=1;
    } else if(currentPlayerHealth<=0) {
        alert('You Lost!');
        flag=1;
    } else if(currentPlayerHealth <=0 && currentMonsterHealth<=0){
        alert('You have a draw!');
    }
}

function healPlayerHandler(){
    increasePlayerHealth(HEAL_VALUE);
}

function logGameHandler(){
    alert(currentPlayerHealth + " " + currentMonsterHealth);
}

attackBtn.addEventListener('click',attackHandler);
strongAttackBtn.addEventListener('click',strongAttackHandler);
healBtn.addEventListener('click',healPlayerHandler);
logBtn.addEventListener('click',logGameHandler);