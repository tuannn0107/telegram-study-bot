import { User } from "./user";

export class Bot {
  id: string;
  name: string;
  user: User;
  token: string;
  createDate: Date;
  updateDate: Date;
  updateBy: User;


  constructor(id: string, name: string, user: User, token: string, createDate: Date, updateDate?: Date, updateBy?: User) {
    this.id = id;
    this.name = name;
    this.user = user;
    this.token = token;
    this.createDate = createDate;
    this.updateDate = updateDate;
    this.updateBy = updateBy;
  }
}
