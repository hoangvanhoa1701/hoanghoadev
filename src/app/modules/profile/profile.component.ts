import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'nv-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @ViewChild('bg_1') bg_1!: ElementRef;
  @ViewChild('bg_2') bg_2!: ElementRef;
  @ViewChild('bg_3') bg_3!: ElementRef;
  @ViewChild('bg_4') bg_4!: ElementRef;
  @ViewChild('bg_5') bg_5!: ElementRef;
  @ViewChild('bg_6') bg_6!: ElementRef;
  @ViewChild('bg_7') bg_7!: ElementRef;
  @ViewChild('bg_8') bg_8!: ElementRef;
  @ViewChild('bg_9') bg_9!: ElementRef;
  @ViewChild('bg_10') bg_10!: ElementRef;
  @ViewChild('bg_11') bg_11!: ElementRef;
  @ViewChild('bg_12') bg_12!: ElementRef;

  @ViewChild('text') text!: ElementRef;
  @ViewChild('btn') btn!: ElementRef;

  public scrollY: any;

  ngOnInit(): void {
    this.scrollY = window.scrollY;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.scrollY = window.scrollY;

    this.bg_1.nativeElement.style.transform = `translateY(${this.scrollY}px)`;
    this.bg_3.nativeElement.style.transform = `translateY(${this.scrollY * 1.05}px)`;
    this.bg_4.nativeElement.style.transform = `translateY(${this.scrollY * 1.01}px)`;
    this.bg_7.nativeElement.style.transform = `translateY(${this.scrollY * 0.4}px)`;
    this.bg_8.nativeElement.style.transform = `translateY(${this.scrollY * 0.2}px)`;
    this.bg_9.nativeElement.style.transform = `translateY(${this.scrollY * 0.3}px)`;
    this.bg_10.nativeElement.style.transform = `translateY(${this.scrollY * 0.25}px)`;
    this.bg_11.nativeElement.style.transform = `translateY(${0}px)`;
    this.bg_12.nativeElement.style.transform = `translateY(${0}px)`;
    this.text.nativeElement.style.transform = `translate(-${
      this.scrollY * 3
    }px, ${this.scrollY * 0.2}px)`;
  }

  scrollToCV(el: HTMLElement) {
    el.scrollIntoView();
  }
}
