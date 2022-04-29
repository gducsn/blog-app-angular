import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  dataFetch: Array<any> = []

  public getData() {
    return this.http.get<any>('https://newsapi.org/v2/everything?q=apple&from=2022-04-27&to=2022-04-27&sortBy=popularity&apiKey=4c0b5ca823a24063b994adc3e48669eb').subscribe((x:any) => {
    const data = x.articles.slice(0,4)  
    this.dataFetch.push(data)
    })
  }





  ngOnInit() {
this.getData();
  }

}
