import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-favorite-btn',
  template: `
    <button class="app-btn" (click)="onBtnClick()">
      <i *ngIf="!isFavorite" class="fa fa-star-o">{{favBtnText.inFav}}</i>
      <i *ngIf="isFavorite" class="fa fa-star">{{favBtnText.outFav}}</i>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteBtnComponent {
  @Output() add: EventEmitter<void> = new EventEmitter();
  @Output() remove: EventEmitter<void> = new EventEmitter();
  @Input() isFavorite: boolean;
  readonly favBtnText = {
    inFav: 'Add to favorite',
    outFav: 'Remove from favorite'
  };

  constructor() {}

  onBtnClick() {
    if (this.isFavorite) {
      this.remove.emit();
      return;
    }
    this.add.emit();
  }
}
