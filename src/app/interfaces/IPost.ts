//any property put inside of IPost will be required unless the property is made optional using ?. ex: date?: Date
export interface IPost {
    id: number;
    postTitle: string;
    date?: Date; 
  }