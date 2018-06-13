import {ParseMode} from "./parse-mode";

export class Message {
  id: string;
  chatId: string;
  content: string;
  parseMode: ParseMode;
  disableWebPagePreview: boolean;
  disableNotification: boolean;
  createDate: Date;
}
