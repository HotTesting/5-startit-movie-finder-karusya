import { browser, element, By, by, until, $, $$, Key, ExpectedConditions as EC } from 'protractor'


export class SeriesPage{
    
   
    private releaseDate = $('div.caption p strong')
    private popularSeriesHeader = $('ul.nav.navbar-nav > li:nth-child(2)')
    private popularSeries = $$('app-popular-series div.col-sm-6.col-md-4.col-lg-3.col-xs-6')

    
   
    async getFirstAirDate(){
        await browser.wait(EC.visibilityOf(this.popularSeries.first()), 2000, 'series has not been uploaded')
        return this.releaseDate.getText()
    }
}