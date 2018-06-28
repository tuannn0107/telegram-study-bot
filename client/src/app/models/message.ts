import {ParseMode} from "./parse-mode";

export class Message {
  id: string;
  chatId: string;
  content: string;
  parseMode: ParseMode;
  disableWebPagePreview: boolean;
  disableNotification: boolean;
  createDate: Date;


  constructor(id: string, chatId: string, content: string, parseMode: ParseMode, disableWebPagePreview?: boolean, disableNotification?: boolean, createDate?: Date) {
    this.id = id;
    this.chatId = chatId;
    this.content = content;
    this.parseMode = parseMode;
    this.disableWebPagePreview = disableWebPagePreview;
    this.disableNotification = disableNotification;
    this.createDate = createDate;
  }
}
