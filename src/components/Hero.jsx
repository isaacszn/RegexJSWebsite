const Hero = () => {
    const goToGetStartedSec = () => {
        location.href = "#get-started"
    }

    return (
        <>
            <div>
                <h1 className="hero">RegexJS an Open Source JavaScript library built to clear the worries of developers having to write regular expressions</h1>
                <button className="hero-btn" onClick={goToGetStartedSec}>Get started 🚀</button>
            </div>
        </>
    )
}

export default Hero