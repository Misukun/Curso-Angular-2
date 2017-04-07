//app.ts

import {ChatRoom} from "./ChatRoom";
import {Message} from "Messages.interface";

let chatRoom = new ChatRoom('Fictizia room');

document.querySelector("#chatName").innerHTML = chatRoom.chatName;

let username = (<HTMLInputElement>document.querySelector("#username"));
let message = (<HTMLInputElement>document.querySelector("#message"));
let messagesList = document.querySelector("#messageList");

document.querySelector("#add").addEventListener('click', (ev) => {

    let userMessage: Message = {
        username: username.value,
        message: message.value,
        date: new Date()
    };

    chatRoom.addMessage(userMessage);

    let messages = chatRoom.messages;

    let result = '';
    messages.forEach((el) => {
        result = `${result}<li>${el.username}:${el.message}</li>`
    });

    messagesList.innerHTML = result;
});



