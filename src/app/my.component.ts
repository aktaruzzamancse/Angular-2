import { Component } from '@angular/core';

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
  		<li *ngFor="let hobby of hobbies">{{hobby}}</li>
  	</ul>
  	</div>
  	<form>
  	<label>Name :</label>
  	<input type="text" name="name" [(ngModel)]="name" />
  	</form>
  	
  `,
})
export class MyComponent  { 
	name:string;
	mobile:string;
	address:address;
	hobbies:string[];
	showhobbies:boolean;

constructor(){
	this.name = 'Aktar';
	this.mobile = '01911854726';
	this.address = {
		street:'satkhira',
		postalcode:'9400'
	}
	this.hobbies = ['Islamic Songs','Programming','waz'];
	this.showhobbies = false;
}
tooglehobby(){
	if(this.showhobbies==true){
		this.showhobbies = false;
	}else{
		this.showhobbies = true;
	}
	
}
}
interface address {
	street:string,
	postalcode:string,
}