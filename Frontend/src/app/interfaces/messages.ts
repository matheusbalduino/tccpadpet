export interface Message{
  receiver: number
  message_sent:string
}

export interface Messages{
  message:string
  sender:number
  receiver: number
  selfsender:boolean
}
