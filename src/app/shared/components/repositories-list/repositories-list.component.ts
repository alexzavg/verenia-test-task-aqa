import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IRepo, IRepoFilter } from '@store/repositories';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-repositories-list',
  templateUrl: './repositories-list.component.html',
  styleUrls: ['./repositories-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepositoriesListComponent {
  @Output() addToFavorites: EventEmitter<IRepo> = new EventEmitter<IRepo>();
  @Output() removeFromFavorites: EventEmitter<number> = new EventEmitter<number>();
  @Input() favoriteMode = false;
  @Input() filters$: Observable<{[key: string]: IRepoFilter}>;
  @Input() list$: Observable<IRepo[]>;
  @Input() favorites$: Observable<IRepo[]>;

  constructor() {}

  checkIsFavorite(list: IRepo[], id: number) {
    return list.some(favorite => favorite.id === id);
  }
}
