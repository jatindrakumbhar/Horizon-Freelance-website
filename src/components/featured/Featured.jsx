import React from 'react'
import "./Featured.scss"

const Featured = () => {
  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h1>Find the perfect <i>freelance</i> services for your business</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="./img/search.png" alt="img-search" />
                        <input type="text" placeholder='Try "building Mobile App"'/>
                    </div>
                    <button>
                        Search
                    </button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Web Design</button>
                    <button>logo Design</button>
                    <button>AI Services</button>
                    <button>WordPress</button>
                </div>
            </div>
            <div className="right">
                <img src="./img/man.png" alt="image-man" />
            </div>
        </div>
    </div>
  )
}

export default Featured