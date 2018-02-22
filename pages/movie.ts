import { browser, element, By, by, until, $, $$, Key, ExpectedConditions as EC } from 'protractor'

export class MovieDetailsPage{
    
    private movieCardLink =  $(' div.caption > h4.text-ellipsis a[title ="Fight Club"]')
    private similarMovies = $$('div.row.is-flex > div.col-md-2> movie-card')
    private movieRating = $('h2 > small.label')
    private castActors = $$('div.thumbnail h6.text-center a')
    private reviewsBlock = $$('app-movie div.col-md-6')
    private movieDetailsName = $('div.row > div:nth-child(2) > h2')
    

    async openMoviePage(){
        await this.movieCardLink.click()
        await browser.wait(EC.visibilityOf(this.movieDetailsName), 20000, 'movies should appear in 20 seconds, but it doesnt')
        
    }

    async getMovieDetailsTitle(){
        this.openMoviePage()
        await browser.wait(EC.visibilityOf(this.movieDetailsName), 2000, 'movie details have not uploaded')
        return this.movieDetailsName.getText()
    }

    async getSimilarMovies():Promise<any>{
        await browser.wait(EC.visibilityOf(this.similarMovies.first()), 5000, 'movie details have not uploaded')
        return this.similarMovies
    }
    
    async getRating(){
        await browser.wait(EC.visibilityOf(this.movieRating), 2000, 'movie details have not uploaded')
        return this.movieRating.getText()
    }

    async getCast():Promise<any>{

        await browser.wait(EC.visibilityOf(this.castActors.first()), 2000, 'actors cast has not uploaded')
        return this.castActors
    }

    async  getReviews():Promise<any>{
        await browser.wait(EC.visibilityOf(this.reviewsBlock.first()), 2000, 'reviews has not uploaded')
        return this.reviewsBlock
    }

    
}