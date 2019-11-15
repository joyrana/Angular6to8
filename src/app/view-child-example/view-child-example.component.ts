import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-child-example',
  templateUrl: './view-child-example.component.html',
  styleUrls: ['./view-child-example.component.css']
})
export class ViewChildExampleComponent implements OnInit {
  @ViewChild('someInput') someInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.someInput.nativeElement.value = "Anchovies! 🍕🍕";
  }

}
