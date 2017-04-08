import { Component } from '@angular/core';
import { PostService } from './services/posts.services';
@Component({
  selector: 'user-app',
  template: `
  	<h1>Hello {{name}}</h1>
  	<p>{{mobile}}</p>
  	<p>{{address.street}} {{address.postalcode}}</p>
  	<button (click)="tooglehobby()">Show Hobby</button>
  	<div *ngIf="showhobbies">
  	<p >My Hobby</p>
  	<ul>
  		<li *ngFor="let hobby of hobbies,let i=index">
  			{{hobby}} <button (click)="delehobby(i)">x</button>
  		</li>
  	</ul>
  	</div>
  	<form (submit)=addHobby(hobby.value)>
  	<label>Hobby :</label>
  	<input type="text" #hobby  /><br/>
  	
  	</form>
  	<form>
  	<label>Name :</label>
  	<input type="text" name="name" [(ngModel)]="name" /><br/>
  	<input type="text" name="mobile" [(ngModel)]="mobile" /><br/>
  	<input type="text" name="street" [(ngModel)]="address.street" /><br/>
  	<input type="text" name="postalcode" [(ngModel)]="address.postalcode" /><br/>
  	</form>
  	<h3>Post</h3>
  	<div *ngFor="let post of posts">
  		<h4>{{post.title}}</h4>
  		<p>{{post.body}}</p>
  	</div>
  	
  `,
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