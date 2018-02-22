import { browser, element, By, by, until, $, $$, Key, ExpectedConditions as EC } from 'protractor'
import { BasePage } from './base-page'

export class SearchPage extends BasePage{

    private searchField = $('input[name="searchStr"]')
    private movieCardLink =  $(' div.caption > h4.text-ellipsis a[title ="Fight Club"]')
    private foundMovies = $$('movies > div > div.row.is-flex movie-card')
    private movieDetailsName = $('div.row > div:nth-child(2) > h2')
    private exactFoundMovieTitle =$$('movie-card h4.text-ellipsis').first()
    private popularSeriesHeader = $('ul.nav.navbar-nav > li:nth-child(2)')
    private popularSeries = $$('app-popular-series div.col-sm-6.col-md-4.col-lg-3.col-xs-6')
    
    async open(){
         await browser.get('/', 1000)
    }
    async searchFor(search_request: string | number){

        await this.searchField.sendKeys(search_request, Key.ENTER)
    }
    
    async getExactFoundMovieTitle(){
        return await this.exactFoundMovieTitle.getText()
    }
    async getMovieTitle(){
          return await this.movieCardLink.getText()
          
    }

    async openMoviePage(){
        this.movieCardLink.click()
        await  browser.wait(EC.visibilityOf(this.movieDetailsName), 20000, 'movies details name should appear but it doesnt')
    }

    async getFoundMovies(): Promise<any> {
        await browser.wait(EC.visibilityOf(this.foundMovies.first()), 5000, 'Movies not loaded!')
        return this.foundMovies
    }
    
    async openPopularSeriesPage(){
        await this.popularSeriesHeader.click()
        await browser.wait(EC.visibilityOf(this.popularSeries.first()), 2000, 'series has not been uploaded')

    }

}