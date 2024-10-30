function MenuButton({button}) {
    const handleClick = () => {
        window.open(button.url);
    };

    return (
        <div className='menu-link col-12 col-xl-4 mb-4'>
            <div onClick={handleClick} className="menu-button">
                <div className="menu-button-bg">
                    <img src='/mall-cop.png' alt="Mall Cop"></img>
                </div>
                <p>{button.title}</p>
            </div>
        </div>
    );
}

export default MenuButton;