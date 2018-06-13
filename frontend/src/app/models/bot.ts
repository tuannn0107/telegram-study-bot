import { User } from "./user";

export class Bot {
  id: string;
  name: string;
  user: User;
  token: string;
  createDate: Date;
  updateDate: Date;
  updateBy: User;

}
