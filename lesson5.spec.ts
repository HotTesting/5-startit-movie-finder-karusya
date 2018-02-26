
import { browser, $, $$, element, by, By, ExpectedConditions as EC } from 'protractor'
import { expect } from 'chai'
import { SearchPage } from './pages/search'
import { MovieDetailsPage } from './pages/movie'
import { SeriesPage } from './pages/series';
import * as log4js from 'log4js'

describe('Movie details', async () => {
    const logger = log4js.getLogger('SpecLogger')
    const searchPage = new SearchPage()
    const movieDetailsPage = new MovieDetailsPage()
    
    let name = 'Fight Club'

        beforeEach(async()=>{
            await searchPage.open()
        })
    

    it('should have movie name as header', async() => {
        let movieTitle =  await searchPage.getMovieTitle()
        await searchPage.openMoviePage()
        expect(await movieDetailsPage.getMovieDetailsTitle()).to.contain(movieTitle)
        logger.info('the movie card name is', await searchPage.getMovieTitle())
        
    })

    it('should have raiting', async() =>{  
        await searchPage.openMoviePage()
        expect(await movieDetailsPage.getRating()).not.to.be.NaN
        logger.info('the movie rating is', await movieDetailsPage.getRating())
   
})

    it('should have simular movies block with at least one movie', async() =>{
        await searchPage.openMoviePage()
        let similarMovies = await movieDetailsPage.getSimilarMovies()
        expect(await this.similarMovies.count()).to.be.above(1)
        logger.info('the number of similar movies is', await this.similarMovies.count())
})

describe('Popular series', async () => {
    const searchPage = new SearchPage()
    const popularSeriesPage = new SeriesPage()

    beforeEach(async () => {
        await browser.manage().timeouts().implicitlyWait(1000)
        await searchPage.open()
    })

    it('shouldnt have search bar', async () => {
        let searchInput = $('input[name="searchStr"]')
        searchPage.openPopularSeriesPage()
        await browser.wait(EC.invisibilityOf(searchInput), 2000, 'series has not been uploaded')
        expect(await searchInput.isDisplayed()).to.be.false
        logger.info('search input is not displayed')
    })

    it('should have "First Air Date" instead "Release Date"', async () => {
       
        searchPage.openPopularSeriesPage()
        let releaseDate = popularSeriesPage.getFirstAirDate()
        expect(await releaseDate).to.contain('First Air Date:')
        logger.info('release date is:', await releaseDate)
    })

})

})
