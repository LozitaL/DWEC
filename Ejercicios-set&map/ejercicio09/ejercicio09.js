"use strict";
let users = new Map();
/* 
*Añade usuarios;
*/ 
function addUser(idU){
if(!(users.has(idU))) users.set(idU,new Set());
else console.error("Error: El usuario ya existe");
}

function countFriends(idU){
    return users.get(idU).size;
}

function addFriend(idU,idF){
    if (!users.get(idU).has(idF) && !users.get(idF).has(idU)) {
        users.get(idU).add(idF);
        users.get(idF).add(idU);
    }
}

function areFriends(idU,idF){
    return users.get(idU).has(idF);
}

addUser(1);
addUser(2);
addFriend(1,2);

console.log(`1 tiene ${countFriends(1)} amigo/s`);
console.log(`¿son amigos? ${areFriends(2,1)}`);