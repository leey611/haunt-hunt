function SimpleSlide(props) {
    const { viewportPosition, children } = props
    return (
        <div
            className="simple_slide"
            style={{
                top: `${viewportPosition}vh`
            }}
        >
            {children || "hello world"}
        </div>
    )
}

export default SimpleSlide