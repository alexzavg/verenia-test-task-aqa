export interface IRepo {
  id: number;
  avatar: string;
  name: string;
  stargazersCount: number;
  description: string;
  url: string;
  language: string;
}

export interface IRepoList {
  data: IRepo[];
  error: string;
  isLoading: boolean;
}

export interface IRepoFilter<T = any, V = any> {
  id: repoFilterId;
  value: T;
  suggestValue?: V;
}

export type repoFilterId = 'searchQuery' | 'language';

export const initRepoList: IRepoList = {
  data: [],
  error: null,
  isLoading: false
};

export const initSearchQueryFilter: IRepoFilter<string> = {
  id: 'searchQuery',
  value: '',
};

export const initLanguageFilter: IRepoFilter<string, string[]> = {
  id: 'language',
  value: '',
  suggestValue: []
};

export const initRepoFilters: {[key: string]: IRepoFilter} = {
  [initSearchQueryFilter.id]: initSearchQueryFilter,
  [initLanguageFilter.id]: initLanguageFilter
};
