export class Post{
    id:number;
    userName:string;
    imageUrl:string;
    content:string;
    likeCount:number;
    commentCount:number;
    shareCount:number;

    post(input:any)
    {
        Object.assign(this,input)
    }

}

