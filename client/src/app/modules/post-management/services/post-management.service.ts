import { Injectable } from '@angular/core';
import {Post} from "../../../models/post";

import {Message} from "../../../models/message";
import {ParseMode} from "../../../models/parse-mode";
import {RandomUtilities} from "../../../shares/utilities/random-utilities";
import {Channel} from "../../../models/channel";
import {User} from "../../../models/user";
import {Bot} from "../../../models/bot";
import {Observable, of} from "rxjs/index";

@Injectable()
export class PostManagementService {

  constructor() { }


  getPostList(): Observable<Array<Post>> {
    let output = new Array<Post>();
    let parseModeList:string[] = ['Markdown', 'HTML'];
    for (let i = 0; i < 25; i++) {
        let parseMode = new ParseMode(String(i%2), parseModeList[i%2]);
        let user = new User('1', 'tuannn0107', 'tuannn0107@gmail.com', 'ABC-XYZ');
        let bot = new Bot('1', 'Telegram bot', user, 'XXXXX-XXXXXXXXXXXXXXXXXXXXX', new Date(), new Date());
        let message = new Message(String(i), RandomUtilities.randomInteger(100000000, 999999999).toString(), 'Message for Post ' + i, parseMode, true, true, new Date() );
        let channel = new Channel(String(i), 'Channel ' + i);
        let post = new Post(String(i),'Post ' + i , bot, channel, message, new Date(), new Date());
        output.push(post);
    }

    return of(output);
  }

}
