import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {
  selectedOption3: string = ''
  code:any
  question:any
  timeLimit:any
  difficulty:any
  test:any

  mainArray:any[] = []
  displayArray:any[] = []
 
constructor(private router: Router){}
  submit(data: any){
    localStorage.setItem('code',data['selectedOption5'])
    localStorage.setItem('question',data['selectedOption3'])
    localStorage.setItem('timeLimit',data['input2'])
    localStorage.setItem('difficulty',data['selectedOption1'])
    localStorage.setItem('test',data['selectedOption6'])
    
    this.localstorageData()

    this.router.navigate(['landing_page'])
    
  }

  onChange(event: any){
    this.selectedOption3 = event.target.value;
  }

localstorageData(){
  this.code = localStorage.getItem('code') || null
    this.question = localStorage.getItem('question') || null
    this.timeLimit = localStorage.getItem('timeLimit') || null
    this.difficulty = localStorage.getItem('difficulty') || null
    this.test = localStorage.getItem('test') || null
  
    
   this.mainArray =JSON.parse( localStorage.getItem('updated')  || '')
   this.mainArray.push({"code":this.code,"question":this.test,"timeLimit":this.timeLimit,"difficulty":this.difficulty,"questionType":this.question})
   localStorage.setItem("updated", JSON.stringify(this.mainArray))
}
}
 