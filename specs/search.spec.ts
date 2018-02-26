import { browser, $, $$, element, by, By, ExpectedConditions as EC } from 'protractor'
import { expect } from 'chai'
import { MovieDetailsPage } from '../pages/movie';
import { SearchPage } from '../pages/search';
import * as log4js from 'log4js'

describe('Search ', async ()=> {
    const searchPage = new SearchPage()
    const movieDetailsPage = new MovieDetailsPage()
    const logger = log4js.getLogger('SpecLogger')

    beforeEach(async()=>{
        await searchPage.open()
    })

    it('by exisiting name, should show first movie with complete name match', async() => {
        const SEARCH_REQUEST = 'Schindler\'s List'
        await searchPage.searchFor(SEARCH_REQUEST)
        //await browser.wait(EC.visibilityOf())
        await browser.sleep(3000)
        expect (await searchPage.getExactFoundMovieTitle()).to.be.equal(SEARCH_REQUEST)
        logger.info('')

    })

    it('results(all of them) should contain search request', async()=>{
        const SEARCH_REQUEST = 'Dreams';
        await searchPage.searchFor(SEARCH_REQUEST)
        await browser.sleep(3000)
        let titles = await searchPage.getFoundMovies()
        expect(titles.length).to.be.equal(20, 'Number of found movies must be 20')
        titles.forEach(title => expect(title).to.contain(SEARCH_REQUEST))
    })

    /*it('result should be empty, after request for nonexistent movie', async()=> {
        const SEARCH_REQUEST = 'Nonexistent movie'
        await searchPage.searchFor(SEARCH_REQUEST)
        let movies = await searchPage.getFoundMovies()
        expect(movies.length).to.be.equal(0)
    })*/
})