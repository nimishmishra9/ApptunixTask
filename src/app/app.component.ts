import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
 {
   HideShowdata:any;
   Imagedata:any[]=[
     {
       "id":"0",
       "backgroundColor":"#009B77",
       "location":"../assets/FirstFlower.jpg",
       "display":"none"
     },
     {
       "id":"1",
      "backgroundColor":"#EFC050",
      "location":"../assets/SecondFlower.jpg",
      "display":"none"
     },
     {
       "id":"2",
      "backgroundColor":"#D65076",
      "location":"../assets/ThirdFlower.jpg",
      "display":"none"
     },
     {
       "id":"3",
      "backgroundColor":"#88B04B",
      "location":"../assets/ForthFlower.jpg",
      "display":"none"
     },
     {
       "id":"4",
      "backgroundColor":"#DFCFBE",
      "location":"../assets/FifthFlower.png",
      "display":"none"
     },
     {
       "id":"5",
      "backgroundColor":"brown",
      "location":"../assets/SixthFlower.png",
      "display":"none"
     }
    ]
   
  showImage(data)
  {
    for(let i=0;i<=this.Imagedata.length;i++)
     {
        if(Number(data)==i)
        {
          if( this.Imagedata[data].display=="block")
          {
            this.Imagedata[data].display="none"
          }
          else
          {
            this.Imagedata[data].display="block"
          }
        }
     }
     
  }
  deleteImage(data)
  {  for(let i=0;i<=this.Imagedata.length;i++)
    {
     if(data==this.Imagedata[i].id)
       {
         for(let j=data;j<=this.Imagedata.length;j++)
         {
           this.Imagedata[j].location=""
           this.Imagedata[Number(j)].location=this.Imagedata[Number(j)+1].location ;

         }
       }
  } }
  
}



 