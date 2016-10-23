import { Component, Input } from '@angular/core';

@Component({
  selector: 'successful-build-types',
  templateUrl: './successful-build-types.component.html',
  styleUrls: ['./successful-build-types.component.css']
})
export class SuccessfulBuildTypesComponent {
  @Input() buildTypes;
}