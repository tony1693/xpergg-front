export class User {
   
    public user_id!: number;
    public avatar!: string;
    public name!: string;
    public email!: string;
    public nationality!: string;
    public aboutMe!: string;
    public password!: string;
    public confirmPassword!: string;
    public status!: boolean;
    public platforms!: string[];
    public genres!: string[];
  
    constructor(user_id: number, name: string, email: string) {
      this.user_id = user_id;
      this.name = name;
      this.email = email;
      this.avatar = '';
      this.nationality = '';
      this.aboutMe = '';
      this.password = '';
      this.confirmPassword = '';
      this.status = false;
      this.platforms = [];
      this.genres = [];
    }
  }
  
