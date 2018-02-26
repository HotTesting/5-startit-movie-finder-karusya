import { browser, element, By, $, $$ } from 'protractor'


export class BasePage {

    public upcomingMoviesHeader = $('#navbar li:nth-child(1)')
    public popularSeriesHeader = $('#navbar li:nth-child(2)')
    public actionCategory = $('ul.nav.nav-stacked a:nth-child(1)')
    public URL = browser.baseUrl

    


}