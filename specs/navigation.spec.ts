import { browser, element, By, by, until, $, $$, Key, ExpectedConditions as EC, ElementArrayFinder } from 'protractor'
import {expect} from 'chai'
import { SearchPage } from '../pages/search'
import * as log4js from 'log4js'

describe.only("Navigation ", async () =>{

    const searchPage = new SearchPage()
    const logger = log4js.getLogger('SpecLogger')

    beforeEach(async()=>{
        await searchPage.open()
    })

    it('should open "Upcoming movies" section', async () => {
        await searchPage.openUpcomingMovies()
        expect(await browser.getCurrentUrl()).to.contain('/upcoming')
        logger.info('opened page url is',  browser.getCurrentUrl())
    })

    it('should open "Popular Series" section', async () =>{
        await searchPage.openPopularSeriesPage()
        expect(await browser.getCurrentUrl()).to.contain('/popular/series')
        logger.info('opened page url is',  browser.getCurrentUrl())
    })

    it('should open "Action" category', async() =>{
        await searchPage.openActionSection()
        expect(await browser.getCurrentUrl()).to.contain('/genres/28/Action')
        logger.info('opened page url is',  browser.getCurrentUrl())
    })

})
