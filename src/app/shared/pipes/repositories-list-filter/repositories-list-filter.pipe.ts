import { Pipe, PipeTransform } from '@angular/core';
import { IRepo, IRepoFilter } from '@core/store/repositories';

@Pipe({
  name: 'repositoriesListFilter'
})
export class RepositoriesListFilterPipe implements PipeTransform {
  transform(list: IRepo[], filters: {[key: string]: IRepoFilter}): IRepo[] {
    if (!(filters && filters.language.value)) {
      return list;
    }
    return list.filter(item => filters.language.value === item.language);
  }
}
