import { browser, element, By, $, $$ } from 'protractor'


export class BasePage {

    public upcomingMoviesButton = $('ul.nav.navbar-nav li:nth-of-type(1)')
    public popularSeriesButton = $('ul.nav.navbar-nav li:nth-of-type(2)')
    public actionSection = $('a[href*="/Action"]')
    

}