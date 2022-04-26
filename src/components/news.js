import React, { Component } from 'react'
import NewsItem from "./newsItem"
import Spinner, { spinner } from "./spinner"
import Navbar from "./navbar"
import InfiniteScroll from "react-infinite-scroll-component";

export class news extends Component {
    articles = []

    // CONSTRUCTOR TO CREATE STATE 
    constructor(props) {
        super(props)

        this.state = {
            articles: this.articles,
            page: 1,
            loading: false

        }
        document.title = `NewsMonkey - ${this.props.category}`
    }

    // UPDATENEWS FUNC TO FETCH API 
    UpdateNews = async (pagseSize) => {
        this.setState({
            loading: true
        })
        let api = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=73ef906e9d9d4a9ebfa83e4f67b40720&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}`)
        let data = await api.json()
        this.setState({
            articles: data.articles,
            totalResults: data.totalResults,
            loading: false
        })
    }


    // COMPONENTDIDMOUNT (LIFECYCLE COMPONENT WHICH WILL RUN AFTER RENDER() FUNC)
    async componentDidMount() {
        this.UpdateNews()
    }


    // FETCHMOREDATA FUNC FOR INFINITE SCROLL 
    fetchMoreData = async () => {
        
        //  SET STATE 
        this.setState({
            loading: true,
            page: this.state.page + 1
        })
        let api = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=73ef906e9d9d4a9ebfa83e4f67b40720&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}`)
        let data = await api.json()
        this.setState({
            articles: this.state.articles.concat(data.articles),
            totalResults: data.totalResults,
            loading: false
        })
    }
    render() {

        return (
            <>
                {/* ADDING COMPONENT NAVBAR  */}
                <Navbar />



                {/* INFINITE SCROLL  */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length != this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container my-3">
                        <div className='row'>

                            {/* MAP FUNC TO RUN LOOP FOR ALL OBJECTS IN NEWSAPI  */}
                            {this.state.articles.map((e) => {
                                let Dates = new Date(e.publishedAt)
                                let FullDate = Dates.getDate()
                                let year = Dates.toDateString()
                                console.log(FullDate)
                                return <div className='col-md-4'>
                                    {/* PASSING PROPS IN NEWSITEM COMPONENT  */}
                                    <NewsItem key={e.url} title={e.title} desc={e.description} img={e.urlToImage ? e.urlToImage : "https://www.gannett-cdn.com/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2022/04/20/USATODAY/usatsports/247WallSt.com-247WS-1094194-snapchat.jpg?auto=webp&format=pjpg&width=1200"} author={e.author ? e.author : "UnKnown"} date={year} />
                                </div>
                            })}
                            {/*  */}
                        </div>
                    </div>
                </InfiniteScroll>

            </>
        )
    }
}

export default news          