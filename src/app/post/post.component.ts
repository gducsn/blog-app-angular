import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, } from '@angular/core';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  onOffButton: boolean = false;




  constructor(private http: HttpClient) { 
  }
  articles: Array<any> = []
  articles2: Array<any> = []
  
public getData() {
  return this.http.get<any>('https://newsapi.org/v2/everything?q=apple&from=2022-04-27&to=2022-04-27&sortBy=popularity&apiKey=4c0b5ca823a24063b994adc3e48669eb').subscribe((x:any) => {
    this.articles.push(x.articles)
    this.articles2 = x.articles.slice()
  })
}

  ngOnInit(){
    this.getData()
    
  }
 

  changeValue(index:number) {

    if(this.onOffButton == false){
      this.onOffButton = true
    } else {
      this.onOffButton = false;
    }
    
    this.articles[0][0] = this.articles[0][index]
    
    this.articles[0].splice(1)
    
  

  }
  closeValue() {
    this.onOffButton = false;
  this.articles.splice(0)
  const newArray = this.articles2.slice()
  this.articles.push(newArray)

  }



}