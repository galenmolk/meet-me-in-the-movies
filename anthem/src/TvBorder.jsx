function TvBorder({children}) {
    return (
        <> 
            <div className="border-edge">
                <div className="inner-border">
                    <div className="content">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TvBorder;
