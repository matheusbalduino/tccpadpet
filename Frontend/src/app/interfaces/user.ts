export class Tutor {
  avatar: string
  document: string
  email: string
  description: string
  street: string
  number: string
  neighborhood: string
  zip_code: string
  city:string
  state: string
  country: string = "Brasil";

}

export interface UserPost {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}
