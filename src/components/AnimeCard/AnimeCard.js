import './AnimeCard.css';

function AnimeCard(props) {
    return (
        <div className='anime-card'>
            <blockquote>
                <p className='anime-card__subtitle'>{props.data.quote}</p>
            </blockquote>
            <figcaption className='anime-card__author'>
                {props.data.character} : {<cite>{props.data.anime}</cite>}
            </figcaption>
        </div>
    )
}
export default AnimeCard;