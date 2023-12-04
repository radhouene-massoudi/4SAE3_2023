import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent {
 @Input() errorMsgEmpty:string |null=null;
 @Input() errorMsgNumber :string |null=null;
 @Input() errorMsgminlength!:string;
}
