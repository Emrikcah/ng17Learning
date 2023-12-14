import { Injectable } from '@angular/core';
import {IPost} from '../interfaces/IPost'

//the providers array allows component to create there own copies of this service. this approach is ok for small apps but larger ones will require a better solution
// @Injectable means the service is available throughout the app
@Injectable({
    providedIn: 'root'
})
export class PostService{
   private _postList: IPost[]=[
        {id:1,postTitle: 'Post 1'},
        {id:2,postTitle: 'Post 2'},
        {id:3,postTitle: 'Post 3'},
        {id:4,postTitle: 'Post 4'},
        {id:5,postTitle: 'Post 5'},
        {id:6,postTitle: 'Post 6'},
        {id:7,postTitle: 'Post 7'},
    ];
    
    //thanks to the providers array i dont have to declare postList as private _postList
    //return a copy of postlist so post-list can mutate it but not effect post component
    get postList(): IPost[]{
        return [...this._postList];
    }
    
}
//this service will be used as a dependency