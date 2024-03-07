function Tile({className,onClick,value}) {
    return ( <div onClick={onClick}className={`tile ${className}`}>
        {value}
    </div> );
}

export default Tile;