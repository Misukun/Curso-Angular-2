//ChatRoom.ts

import {Message} from "./Messages.interface";

export class ChatRoom {

    public chatName: string;
    public numberOfUsers: number;
    private _messages: Array<Message>;

    constructor(chatName:string, numberOfUsers?:number) {
        this._messages = [];
        this.chatName = chatName || 'New room';
    }

    get messages() {
        return this._messages;
    }

    set messages(value:Array<Message>) {
        console.log("messages is an inmutable property");
    }

    addMessage(message:Message) {
        console.log(message);
        this._messages.push(message);
    }

}