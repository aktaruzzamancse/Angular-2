import { Component } from '@angular/core';
import { PostService } from './services/posts.services';
@Component({
  moduleId: module.id,
  selector: 'user-app',
  templateUrl: 'my.component.html',
  providers:[PostService]
})
export class MyComponent  { 
	name:string;
	mobile:string;
	address:address;
	hobbies:string[];
	showhobbies:boolean;
	posts:Post[];


constructor(private postService:PostService){
	this.name = 'Aktar';
	this.mobile = '01911854726';
	this.address = {
		street:'satkhira',
		postalcode:'9400'
	}
	this.hobbies = ['Islamic Songs','Programming','waz'];
	this.showhobbies = false;
	this.postService.getPosts().subscribe(posts=> {
		this.posts = posts; 
	});
}
tooglehobby(){
	if(this.showhobbies==true){
		this.showhobbies = false;
	}else{
		this.showhobbies = true;
	}
	
}
addHobby(hobby:any){
	this.hobbies.push(hobby);
}
delehobby(i:any){
	this.hobbies.splice(i,1);
}
}
interface address {
	street:string,
	postalcode:string,
}
interface Post {
	id:number,
	title:string,
	body:string,
}