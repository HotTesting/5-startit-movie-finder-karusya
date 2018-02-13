
import { browser, $, $$, element, by, By, ExpectedConditions as EC } from 'protractor'
import { expect } from 'chai'

describe('Movie details', async () => {

    beforeEach(async () => {
        await browser.get('/', 1000)
        
        
    })

    it('should have movie name as header', async () => {
        let movieNameLink = await $(' div.caption > h4.text-ellipsis a[title = "Fight Club"]')
        let movieNameText = await $(' div.caption > h4.text-ellipsis a[title = "Fight Club"]').getText()
        let movieDetailsName = await $('div.row > div:nth-child(2) > h2')

        await movieNameLink.click()
        await browser.wait(EC.visibilityOf(movieDetailsName), 2000, 'movie details have not uploaded')
        expect(await movieDetailsName.getText()).to.contain(movieNameText)
    })

    it('should have raiting', async() => {
        //open details page , check that rating is present , check that it is not empty
        let movieNameLink = await $(' div.caption > h4.text-ellipsis a[title = "Fight Club"]')
        let movieRating = $('h2 > small.label')

        await movieNameLink.click()
        await browser.wait(EC.visibilityOf(movieRating), 2000, 'movie details have not uploaded')
        expect(movieRating.getText()).not.to.be.empty

    })

    it('should have simular movies block with at least one movie', async() => {
        let movieNameLink = await $(' div.caption > h4.text-ellipsis a[title = "Fight Club"]')
        let similarMoviesBlock = $$('div.row.is-flex > div.col-md-2> movie-card');

        await movieNameLink.click()
        await browser.wait(EC.visibilityOf(similarMoviesBlock.first()), 2000, 'movie details have not uploaded')
        expect(await similarMoviesBlock.count()).to.be.above(1)
        

    })

    describe('cast block', async () => {
        it('should show at least one actor', async () => {
            let movieNameLink = await $(' div.caption > h4.text-ellipsis a[title = "Fight Club"]')
            let castActors = $$('div.thumbnail h6.text-center a')

            await movieNameLink.click()
            await browser.wait(EC.visibilityOf(castActors.first()), 2000, 'actors cast has not uploaded')
            expect(await castActors.count()).to.be.above(0)

        })
    })

    describe('reviews block', () => {
        beforeEach(async () => {
            await browser.get('/',1000)
            let movieNameLink = $(' div.caption > h4.text-ellipsis a[title = "Your Name."]')
            await movieNameLink.click()
        })
    

        it('should be at least one review', async () => {
            let reviewsBlock = $$('app-movie div.col-md-6')

            await browser.wait(EC.visibilityOf(reviewsBlock.first()), 2000, 'reviews has not uploaded')
            expect(await reviewsBlock.count()).to.be.above(0)
        })

        it('should have reviewer name as link to source', async () => {
            let reviewerNames = $$('app-movie div.col-md-6 cite a')

            await browser.wait(EC.visibilityOf(reviewerNames.first()), 2000, 'reviews has not uploaded')
            let reviewerNamesLinks: any = await reviewerNames.getAttribute('href')
            reviewerNamesLinks.forEach(link => {
                expect(link).to.contain('https://www.themoviedb.org')
            })
        })
    })
})

describe('Popular series', async () => {
    beforeEach(async () => {
        await browser.get('/', 1000)
        let popularSeriesButton = $$('#navbar li:nth-child(2)')
        await popularSeriesButton.click()
    })

    it('shouldnt have search bar', async () => {
        let searchInput = $('input[name="searchStr"]')
        let popularHeader = $('nav.navbar-nav')
        let popularSeries = $$('app-popular-series div.col-sm-6.col-md-4.col-lg-3.col-xs-6')

        await browser.wait(EC.and(EC.visibilityOf(popularSeries.first()), EC.invisibilityOf(searchInput)), 2000, 'series has not been uploaded')


    })

    it('should have "First Air Date" instead "Release Date"', async () => {
        let releaseDate = $('div.caption p strong')
        let popularHeader = $('nav.navbar-nav')
        let popularSeries = $$('app-popular-series div.col-sm-6.col-md-4.col-lg-3.col-xs-6')

        await browser.wait(EC.visibilityOf(popularSeries.first()), 2000, 'series has not been uploaded')
        expect(await releaseDate.getText()).to.contain('First Air Date:')

    })
})


