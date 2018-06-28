import {Bot} from "./bot";
import {Channel} from "./channel";
import {Message} from "./message";

export class Post {
  id: string;
  title: string;
  bot: Bot;
  channel: Channel;
  message: Message;
  createDate: Date;
  lastPublic: Date;

  constructor(id: string, title: string, bot: Bot, channel: Channel, message: Message, createDate?: Date, lastPublic?: Date) {
    this.id = id;
    this.title = title;
    this.bot = bot;
    this.channel = channel;
    this.message = message;
    this.createDate = createDate;
    this.lastPublic = lastPublic;
  }
}
