import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCopyCode]'
})
export class CopyCodeDirective {
  @Input() copyContent: string = ''; // Input content to copy

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onClick() {
    const contentToCopy = this.copyContent || this.el.nativeElement.innerText;
    this.copyTextToClipboard(contentToCopy);
    this.showCopiedMessage();
  }

  private copyTextToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Copied to clipboard:', text);
    }).catch(err => {
      console.error('Could not copy text:', err);
    });
  }

  private showCopiedMessage() {
    const originalContent = this.el.nativeElement.innerText;
    this.renderer.addClass(this.el.nativeElement, 'copied');

    // Revert back to original state after 2 seconds
    setTimeout(() => {
      this.renderer.removeClass(this.el.nativeElement, 'copied');
    }, 2000);
  }
}