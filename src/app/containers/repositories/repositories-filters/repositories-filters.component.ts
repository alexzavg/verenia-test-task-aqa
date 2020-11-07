import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { IRepoFilter, repoFilterId } from '@store/repositories';

@Component({
  selector: 'app-repositories-filters',
  templateUrl: './repositories-filters.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepositoriesFiltersComponent implements OnInit {
  @Output() setQuery: EventEmitter<{id: repoFilterId, value: string}> = new EventEmitter<{id: repoFilterId, value: string}>();
  @Input() filters$: Observable<{[key: string]: IRepoFilter}>;
  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    let filters: {[key: string]: IRepoFilter};
    this.filters$.pipe(take(1)).subscribe(f => filters = f);
    this.initForm(filters);
  }

  private initForm(filters: {[key: string]: IRepoFilter}) {
    this.form = this.fb.group({
      searchQuery: new FormControl(filters.searchQuery.value),
      language: new FormControl(filters.language.value),
    });
    this.initFormValueChangeListener();
  }

  private initFormValueChangeListener() {
    this.form.get('searchQuery').valueChanges.subscribe(value => {
      this.setQuery.emit({id: 'searchQuery', value});
    });
    this.form.get('language').valueChanges.subscribe(value => {
      this.setQuery.emit({id: 'language', value});
    });
  }
}
