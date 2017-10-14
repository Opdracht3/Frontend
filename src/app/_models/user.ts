export class User {
    id: number;
    userName: string;
    passWord: string;
    firstName: string;
    lastName: string;  
    
    constructor(userName: string, passWord: string) {
        this.userName = userName;
        this.passWord = passWord;
    }
}