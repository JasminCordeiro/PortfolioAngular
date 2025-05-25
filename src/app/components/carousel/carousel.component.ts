import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('prevButton') prevButtonRef!: ElementRef<HTMLButtonElement>;
  @ViewChild('nextButton') nextButtonRef!: ElementRef<HTMLButtonElement>;
  @ViewChildren('carouselItem') carouselItemsRefs!: QueryList<ElementRef<HTMLDivElement>>;

  private currentIndex = 0;
  private itemsPerPage = 1;
  private destroy$ = new Subject<void>();

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.setupResponsiveLayout();
  }

  ngAfterViewInit(): void {
    this.updateVisibility();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private setupResponsiveLayout(): void {
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.TabletPortrait])
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        this.itemsPerPage = result.matches ? 1 : 3;
        this.updateVisibility();
      });
  }

  next(): void {
    const items = this.carouselItemsRefs.toArray();
    const maxIndex = items.length - this.itemsPerPage;
    this.currentIndex = Math.min(this.currentIndex + 1, maxIndex);
    this.updateVisibility();
  }

  previous(): void {
    this.currentIndex = Math.max(this.currentIndex - 1, 0);
    this.updateVisibility();
  }

  private updateVisibility(): void {
    if (!this.carouselItemsRefs) return;

    const items = this.carouselItemsRefs.toArray();
    items.forEach((item, index) => {
      const isVisible = index >= this.currentIndex && 
                       index < this.currentIndex + this.itemsPerPage;
      item.nativeElement.style.display = isVisible ? 'block' : 'none';
    });

    // Atualizar estado dos botões
    if (this.prevButtonRef) {
      this.prevButtonRef.nativeElement.disabled = this.currentIndex === 0;
    }
    if (this.nextButtonRef) {
      this.nextButtonRef.nativeElement.disabled = 
        this.currentIndex >= items.length - this.itemsPerPage;
    }
  }
}
