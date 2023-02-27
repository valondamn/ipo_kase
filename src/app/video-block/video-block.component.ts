import { Component } from '@angular/core';
interface investor{
name:any
title?:any[]
}

@Component({
  selector: 'app-video-block',
  templateUrl: './video-block.component.html',
  styleUrls: ['./video-block.component.scss']
})
export class VideoBlockComponent {
investors:investor[]=[{
  name:'Инвестируя в IPO на KASE, у вас появляется возможность:',
title:[{
  info:'стать совладельцем успешных, стабильно развивающихся казахстанских компаний, выходящих на IPO',
  info1:'получить доступ к другим инструментам, торгуемым на KASE'
}]}]
}
