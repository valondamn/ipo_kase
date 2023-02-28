import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
interface investor { 
  name: any 
  title?: any[]   
  name2:  any
  title2: any[]
}

interface block_video{ 
  header: any 
  
  sub_header: any 
  
}




@Component({
  selector: 'app-video-block',
  templateUrl: './video-block.component.html',
  styleUrls: ['./video-block.component.scss']
})
export class VideoBlockComponent { 

  block_video: block_video[] = [{
    header: 'Зачем инвестировать в IPO на KASE?', 
    sub_header: "KASE - ваш партнер уверенного роста!", 
   
  }]


  





  investors: 
  investor[] = [{
    name: 'Инвестируя в IPO на KASE, у вас появляется возможность:',  
    name2: 'Эти возможности позволят вам:',
    title: [{
      info: 'стать совладельцем успешных, стабильно развивающихся казахстанских компаний, выходящих на IPO',
      info1: 'получить доступ к другим инструментам, торгуемым на KASE'}],  
 
    title2:[{
      info2:"создать источник дополнительного дохода", 
      info3:"сформировать капитал на долгосрочные цели (образование, пенсия)", 
      info4:"внести свой вклад в развитие бизнеса отдельных компаний и экономики страны"
    }]
    
  }]

  
  
}

