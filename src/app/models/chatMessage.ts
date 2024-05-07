export class ChatMessage {
  chat_message_id: number;
  date: Date;
  user_id: number;
  text: string;
  chat_id: number;
  getMessages: any;
  postMessage: any;

  constructor(chat_message_id: number, date: Date, user_id: number, text: string, chat_id: number) {
    this.chat_message_id = chat_message_id;
    this.date = date;
    this.user_id = user_id;
    this.text = text;
    this.chat_id = chat_id;
  }
}
