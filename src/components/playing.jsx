import './playing.css'
export function Playing({title, artist}) {
    return (
        <section className='pl'>
            <img src="https://via.placeholder.com/300" className='pl-img' />
            <div className="info">
                <span className="pl-title">{title}</span>
                <span className="pl-artist">{artist}</span>
            </div>
            <div className='buttons'>
                
            </div>
        </section>
    )
}