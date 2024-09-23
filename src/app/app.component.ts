import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('codeContent') codeContent!: ElementRef;  // Correctly declare ViewChild
  @ViewChild('codeContent2') codeContent2!: ElementRef;  // Correctly declare ViewChild

  // This will be called after the view and child elements have been initialized
  ngAfterViewInit() { }

  // Method to get the inner text of the code block
  getCodeText(): string {
    if (this.codeContent) {
      return this.codeContent.nativeElement.innerText;  // Access content safely
    } else {
      // alert("failed to copy")
      return '';  // Fallback if ViewChild is not yet initialized
    }
  }
  getCodeText2(): string {
    if (this.codeContent2) {
      return this.codeContent2.nativeElement.innerText;  // Access content safely
    } else {
      // alert("failed to copy")
      return '';  // Fallback if ViewChild is not yet initialized
    }

  }

}