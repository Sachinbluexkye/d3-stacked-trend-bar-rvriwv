import {Component, OnInit} from '@angular/core'

interface StackedChart{
	one: number,
	two: number,
	three: number,
	four: number,
}

const stackedChart: StackedChart[] = [
   {
      "date": "Jan",
      "one":148,
      "two":287,
      "three":147,
      "four":154
   },
   {
      "date": "Jan",
      "one":545,
      "two":27,
      "three":487,
      "four":217
   }
  ,
  {
      "date": "Feb",    
      "one":143,
      "two":288,
      "three":424,
      "four":42
  },
  {
      "date": "Feb",
      "one":191,
      "two":209,
      "three":345,
      "four":67
  },
   {
      "date": "Mar",
      "one":148,
      "two":27,
      "three":147,
      "four":134
   },
   {
      "date": "Mar",
      "one":386,
      "two":286,
      "three":287,
      "four":247
   }
  ,
  {
      "date": "Apr",    
      "one":13,
      "two":286,
      "three":924,
      "four":450
  },
  {
      "date": "Apr",
      "one":121,
      "two":209,
      "three":345,
      "four":67
  },
   {
      "date": "May",
      "one":145,
      "two":287,
      "three":647,
      "four":114
   },
   {
      "date": "May",
      "one":556,
      "two":27,
      "three":87,
      "four":47
   }
  ,
  {
      "date": "June",    
      "one":143,
      "two":28,
      "three":424,
      "four":45
  },
  {
      "date": "June",
      "one":121,
      "two":209,
      "three":345,
      "four":67
  },
   {
      "date": "July",
      "one":148,
      "two":287,
      "three":147,
      "four":134
   },
   {
      "date": "July",
      "one":56,
      "two":687,
      "three":387,
      "four":245
   }
  ,
  {
      "date": "Aug",    
      "one":143,
      "two":28,
      "three":424,
      "four":45
  },
  {
      "date": "Aug",
      "one":121,
      "two":209,
      "three":345,
      "four":67
  },
  {
      "date": "Sept",
      "one":121,
      "two":209,
      "three":345,
      "four":67
  },
   {
      "date": "Sept",
      "one":148,
      "two":287,
      "three":147,
      "four":134
   },
   {
      "date": "Oct",
      "one":586,
      "two":287,
      "three":487,
      "four":247
   }
  ,
  {
      "date": "Oct",    
      "one":143,
      "two":285,
      "three":42,
      "four":43
  },
  {
      "date": "Nov",
      "one":11,
      "two":269,
      "three":145,
      "four":98
  },
   {
      "date": "Nov",
      "one":586,
      "two":287,
      "three":487,
      "four":247
   }
  ,
  {
      "date": "Dec",    
      "one":10,
      "two":266,
      "three":44,
      "four":75
  },
  {
      "date": "Dec",
      "one":128,
      "two":203,
      "three":35,
      "four":475
  }
]

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6';

  stackedData = stackedChart

  constructor() {}
  
}
