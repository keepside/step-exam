import React, { useState, useEffect } from 'react'

import '../styles/jokes.scss'
import favoriteEmptyImage from '../photo/favoriteEmpty.svg'
import chatIcon from '../photo/chatIcon.svg'
import chatLine from '../photo/chatLine.svg'
import heart from '../photo/heart.svg'
import openFavoriteLine from '../photo/openFavoriteLine.svg'
import reactDom from 'react-dom'

const API_URL = 'https://api.chucknorris.io/jokes/random';

const Jokes = () =>{
    const [joke, setJoke] = useState('');
    const [id, setId] = useState('');
    const [favorites, setFavorites] = useState([]);

    const generateRandomJoke = () => {
        fetch(API_URL)
        .then(res => res.json())
        .then(data => setJoke(data.value));
    }

    const generateRandomId = () => {
        fetch(API_URL)
        .then(res => res.json())
        .then(data => setId(data.id));
    }

    const onClickFunction = () => {
        generateRandomJoke();
        generateRandomId();
    }

    useEffect(() => {
        generateRandomJoke();
    }, [])

    const isDisabled = () => {
        return false;
    }

    const chooseTheRandomCategory = () => {
        if(document.getElementById('random').checked === true) {
            return isDisabled();
        } else {
            return;
        }
    }

    const [toggle, setToggle] = useState(false);
    
    const adaptiveOpenFav = () => {
        toggle ? setToggle(false) : setToggle(true);
        console.log('clicked, but style changing is not working');
    }

    return(
        <div className="general-block">
            <div className="jokes-section">
                <div className="jokes-section_title">MSI 2020</div>
                <div className="open-favorite_block">
                    <div className="open-favorites_button" onClick={adaptiveOpenFav}>
                        <img className="favorites-button_decoration-first" src={openFavoriteLine} alt="" />
                        <img className="favorites-button_decoration-second" src={openFavoriteLine} alt="" />
                    </div>
                    <div className="open-favorites_text">Favorite</div>
                </div>
                <div className="jokes-welcome_text-block">
                    <div className="jokes-welcome_text-first">Hey!</div>
                    <div className="jokes-welcome_text-second">Let’s try to find a joke for you:</div>
                    <div className="jokes_radio-block">
                        <div className="jokes_radio-block_random">
                            <input type="radio" name="type" id="random" value="Random"  onClick={chooseTheRandomCategory} />
                            <label className="label-random" htmlFor="random">Random</label>
                        </div>
                        <div className="jokes_radio-block_category">
                            <input type="radio" name="type" id="category" value="Category" />
                            <label className="label-category" htmlFor="category">From categories</label>
                            <div className="jokes-categories_list">
                                <button className="jokes-categories_list-item">ANIMAL</button>
                                <button className="jokes-categories_list-item">CAREER</button>
                                <button className="jokes-categories_list-item different-item_large">CELEBRITY</button>
                                <button className="jokes-categories_list-item different-item_small">DEV</button>
                            </div>
                        </div>
                    </div>
                </div>
                    <button onClick={onClickFunction} className="get-a-joke_button" disabled={isDisabled()}>
                    <div className="get-a-joke_button-text">Get a joke</div>
                </button>
                <div className="joke-text_section">
                    <div className="favorite-icon_block">
                        <img className="favorite-icon_image" src={favoriteEmptyImage} alt="" />
                    </div>
                    <div className="chat-image_block">
                        <img className="chat-icon_image" src={chatIcon} alt="" />
                        <img className="chat-line_image-first" src={chatLine} alt="" />
                        <img className="chat-line_image-second" src={chatLine} alt="" />
                        <img className="chat-line_image-third" src={chatLine} alt="" />
                    </div>
                    <div className="joke-text_block">
                        <div className="id-block">ID: {id}</div>
                        <div className="joke-text">{joke}</div>
                        <div className="joke-category-display_block">
                            <div className="joke-category-display_block-text">CELEBRITY</div>
                        </div>
                    </div>
                </div>
                <div className={adaptiveOpenFav ? "favorite-section_adaptive" : "favorite-section_adaptive-visible"}>
                <div className="favorite-title_adaptive">Favourite</div>
                <div className="favorite-joke_block_adaptive">
                <div className="favorite-icon_block-favorites_adaptive">
                    <img className="favorite-icon_image-favorites_adaptive" src={heart} alt="" />
                </div>
                    <div className="chat-image_block_favorite_adaptive">
                        <img className="chat-icon_image_adaptive" src={chatIcon} alt="" />
                        <img className="chat-line_image-first_adaptive" src={chatLine} alt="" />
                        <img className="chat-line_image-second_adaptive" src={chatLine} alt="" />
                        <img className="chat-line_image-third_adaptive" src={chatLine} alt="" />
                    </div>
                    <div className="favorite-joke-text_block_adaptive">
                        <div className="favorite-id-block_adaptive">ID: {id}</div>
                        <div className="favorite-joke-text_adaptive">{joke}</div>
                    </div>
                </div>
                <div className="favorite-joke_block_adaptive">
                <div className="favorite-icon_block-favorites_adaptive">
                    <img className="favorite-icon_image-favorites_adaptive" src={heart} alt="" />
                </div>
                    <div className="chat-image_block_favorite_adaptive">
                        <img className="chat-icon_image_adaptive" src={chatIcon} alt="" />
                        <img className="chat-line_image-first_adaptive" src={chatLine} alt="" />
                        <img className="chat-line_image-second_adaptive" src={chatLine} alt="" />
                        <img className="chat-line_image-third_adaptive" src={chatLine} alt="" />
                    </div>
                    <div className="favorite-joke-text_block_adaptive">
                        <div className="favorite-id-block_adaptive">ID: {id}</div>
                        <div className="favorite-joke-text_adaptive">{joke}</div>
                    </div>
                </div>
                <div className="favorite-joke_block_adaptive">
                <div className="favorite-icon_block-favorites_adaptive">
                    <img className="favorite-icon_image-favorites_adaptive" src={heart} alt="" />
                </div>
                    <div className="chat-image_block_favorite_adaptive">
                        <img className="chat-icon_image_adaptive" src={chatIcon} alt="" />
                        <img className="chat-line_image-first_adaptive" src={chatLine} alt="" />
                        <img className="chat-line_image-second_adaptive" src={chatLine} alt="" />
                        <img className="chat-line_image-third_adaptive" src={chatLine} alt="" />
                    </div>
                    <div className="favorite-joke-text_block_adaptive">
                        <div className="favorite-id-block_adaptive">ID: {id}</div>
                        <div className="favorite-joke-text_adaptive">{joke}</div>
                    </div>
                </div>
            </div>
            <div className="favorite-section_adaptive-phone">
                <div className="favorite-title_adaptive-phone">Favourite</div>
                <div className="favorite-joke_block_adaptive-phone">
                <div className="favorite-icon_block-favorites_adaptive-phone">
                    <img className="favorite-icon_image-favorites_adaptive-phone" src={heart} alt="" />
                </div>
                    <div className="chat-image_block_favorite_adaptive-phone">
                        <img className="chat-icon_image_adaptive-phone" src={chatIcon} alt="" />
                        <img className="chat-line_image-first_adaptive-phone" src={chatLine} alt="" />
                        <img className="chat-line_image-second_adaptive-phone" src={chatLine} alt="" />
                        <img className="chat-line_image-third_adaptive-phone" src={chatLine} alt="" />
                    </div>
                    <div className="favorite-joke-text_block_adaptive-phone">
                        <div className="favorite-id-block_adaptive-phone">ID: {id}</div>
                        <div className="favorite-joke-text_adaptive-phone">{joke}</div>
                    </div>
                </div>
                <div className="favorite-joke_block_adaptive-phone">
                <div className="favorite-icon_block-favorites_adaptive-phone">
                    <img className="favorite-icon_image-favorites_adaptive-phone" src={heart} alt="" />
                </div>
                    <div className="chat-image_block_favorite_adaptive-phone">
                        <img className="chat-icon_image_adaptive-phone" src={chatIcon} alt="" />
                        <img className="chat-line_image-first_adaptive-phone" src={chatLine} alt="" />
                        <img className="chat-line_image-second_adaptive-phone" src={chatLine} alt="" />
                        <img className="chat-line_image-third_adaptive-phone" src={chatLine} alt="" />
                    </div>
                    <div className="favorite-joke-text_block_adaptive-phone">
                        <div className="favorite-id-block_adaptive-phone">ID: {id}</div>
                        <div className="favorite-joke-text_adaptive-phone">{joke}</div>
                    </div>
                </div>
                <div className="favorite-joke_block_adaptive-phone">
                <div className="favorite-icon_block-favorites_adaptive-phone">
                    <img className="favorite-icon_image-favorites_adaptive-phone" src={heart} alt="" />
                </div>
                    <div className="chat-image_block_favorite_adaptive-phone">
                        <img className="chat-icon_image_adaptive-phone" src={chatIcon} alt="" />
                        <img className="chat-line_image-first_adaptive-phone" src={chatLine} alt="" />
                        <img className="chat-line_image-second_adaptive-phone" src={chatLine} alt="" />
                        <img className="chat-line_image-third_adaptive-phone" src={chatLine} alt="" />
                    </div>
                    <div className="favorite-joke-text_block_adaptive-phone">
                        <div className="favorite-id-block_adaptive-phone">ID: {id}</div>
                        <div className="favorite-joke-text_adaptive-phone">{joke}</div>
                    </div>
                </div>
            </div>
            </div>
            <div className="favorite-section">
                <div className="favorite-title">Favourite</div>
                <div className="favorite-joke_block">
                <div className="favorite-icon_block-favorites">
                    <img className="favorite-icon_image-favorites" src={heart} alt="" />
                </div>
                    <div className="chat-image_block_favorite">
                        <img className="chat-icon_image" src={chatIcon} alt="" />
                        <img className="chat-line_image-first" src={chatLine} alt="" />
                        <img className="chat-line_image-second" src={chatLine} alt="" />
                        <img className="chat-line_image-third" src={chatLine} alt="" />
                    </div>
                    <div className="favorite-joke-text_block">
                        <div className="favorite-id-block">ID: {id}</div>
                        <div className="favorite-joke-text">{joke}</div>
                    </div>
                </div>
                <div className="favorite-joke_block">
                <div className="favorite-icon_block-favorites">
                    <img className="favorite-icon_image-favorites" src={heart} alt="" />
                </div>
                    <div className="chat-image_block_favorite">
                        <img className="chat-icon_image" src={chatIcon} alt="" />
                        <img className="chat-line_image-first" src={chatLine} alt="" />
                        <img className="chat-line_image-second" src={chatLine} alt="" />
                        <img className="chat-line_image-third" src={chatLine} alt="" />
                    </div>
                    <div className="favorite-joke-text_block">
                        <div className="favorite-id-block">ID: {id}</div>
                        <div className="favorite-joke-text">{joke}</div>
                    </div>
                </div>
                <div className="favorite-joke_block">
                <div className="favorite-icon_block-favorites">
                    <img className="favorite-icon_image-favorites" src={heart} alt="" />
                </div>
                    <div className="chat-image_block_favorite">
                        <img className="chat-icon_image" src={chatIcon} alt="" />
                        <img className="chat-line_image-first" src={chatLine} alt="" />
                        <img className="chat-line_image-second" src={chatLine} alt="" />
                        <img className="chat-line_image-third" src={chatLine} alt="" />
                    </div>
                    <div className="favorite-joke-text_block">
                        <div className="favorite-id-block">ID: {id}</div>
                        <div className="favorite-joke-text">{joke}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Jokes;