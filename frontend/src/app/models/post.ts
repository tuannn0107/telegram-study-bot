import {Bot} from "./bot";
import {Channel} from "./channel";
import {Message} from "./message";

export class Post {
  id: string;
  bot: Bot;
  channel: Channel;
  message: Message;
  createDate: Date;
  lastPublic: Date;

}
