import React from 'react'

const Meal = ( {mealName, mealImage, likes} ) => (
    <div>
        <nav>
            <ul>
                <li>Preview</li>
                <li>Ingredients</li>
                <li>Preparation</li>
            </ul>
        </nav>
        <img src={mealImage} alt="meal"/>
        <div>
            <h1>{mealName}</h1>
            <span>{likes}</span>
            <span class="iconify" data-icon="ant-design:heart-filled" data-inline="false"></span>
        </div>
        <footer>
            <ul>
                <li>
                    <span class="iconify" data-icon="ant-design:star-filled" data-inline="false"></span>
                    <span>Favorite</span>
                </li>
                <li>
                    <button>
                        <span class="iconify" data-icon="ant-design:heart-filled" data-inline="false"></span>
                    </button>
                    <button>Recommend</button>
                </li>
                <li>
                    <a>
                        <span class="iconify" data-icon="fa-solid:share-square" data-inline="false"></span>
                    </a>                    
                    <a>Share</a>
                </li>
            </ul>
        </footer>
    </div>
)

export default Meal