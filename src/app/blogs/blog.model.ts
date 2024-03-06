export interface BlogModel{
    id:number,
    title:string,
    description:string
}
export interface StudentsModel{
    id:number,
    name:string,
    email:string,
    phone:string,
    DOB:string,
    password:string,
    gender:string,
    role:string
}

export interface issueModel{
   id:string,
   books:
    {
        categoryname:string,
        bookname:string
    }[];
   
}
export interface responseModel{
   message:string
 }