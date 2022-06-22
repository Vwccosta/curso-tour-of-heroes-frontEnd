import { Injectable } from '@angular/core';
//O objetivo aqui é tem uma String de mensagem
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  //Inicialização de array vazio
  private messages: string[] = [];
  add(message: string): void{
    this.messages.push(message);
  }
  clear(): void{
    this.messages = [];
  }
  getMessages(): string[]{
    return this.messages;
  }
}
