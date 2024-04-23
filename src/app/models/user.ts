export interface User {
avalaible_to_play: any;
avalaibleToPlay: any;
  
    user_id: number;
    avatar: string;
    name: string;
    email: string;
    nationality: string;
    aboutMe: string;
    password: string;
    confirmPassword: string;
    available_to_play:boolean;
    platforms: string[];
    genres: string[];

  };

export interface LoginBody{
  name:string;
  password: string; 

}