import { Component } from '@angular/core'; 
import { PlyrC}
interface title{
  name:string
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 titles:title[]=[{
  name:'Что нужно знать'
 },
{
  name:'Как участвовать в IPO' 

},
{
  name:'Мероприятия'
},
{
  name:'Полезные материалы'
},
{
  name:'Контакты'
},



]
}
