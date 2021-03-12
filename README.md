# Oleksandr Zavhorodnii - Automation test task for Verenia

Тест кейс:
1. открыть страницу http://localhost:4200/ 
2. на странице Home дождаться загрузки поля поиска
3. ввести в поиск слово [test]
4. в дропдауне [Language] выбрать [JavaScript] 
5. в результатах поиска дождаться появления репозиториев
6. забрать названия репозиториев в массив
7. проверить что блок с каждым репо из саммива содержит слово [test]
8. нажать кнопку [add to favourites] для каждого репозитория из массива
9. перейти на страницу http://localhost:4200/favorites 
10. в появившемся prompt-алерте ввести пароль [1234]
11. проверить что элементы из поиска добавились
12. нажать [remove from favourites]
13. убедиться что элементы не отображаются на странице
14. в хедере перейти на страницу [home] 
15. убедиться что страница загрузилась, дождавшись отображения блока [Filters]

# VereniaTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
