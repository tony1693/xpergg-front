export interface User {
  
    user_id: number;
    avatar: string;
    name: string;
    email: string;
    nationality: string;
    aboutMe: string;
    password: string;
    confirmPassword: string;
    available_to_play:boolean;
    platform: string[];
    interest: string[];

  };

export interface LoginBody{
  name:string;
  password: string; 

}

export interface RegisterBody{
  user_id?: number;
  name: string;
  email: string;
  nationality: string;
  available_to_play: boolean;
  password: string;
  platform: string[];
  interest: string[];
}