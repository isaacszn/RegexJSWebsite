const SampleCodes = () => {
    const littleStyle = {
        margin: "10px", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"
    }

    return (
        <>
            <div className="box">
                <h1 className="sub-header" id="sample-codes">Sample Codes</h1>
                <p>The RegexJS library comes with few pre-written methods for writing regular expression patterns and doing validation with them for now, they include:</p>
                <ul>
                    <li><code><span className="pink">RegexJS</span>.<span className="green">patternEmail</span>(<span className="light-green">email</span>);</code></li>
                    <li><code><span className="pink">RegexJS</span>.<span className="green">patternURL</span>(<span className="light-green">url</span>);</code></li>
                    <li><code><span className="pink">RegexJS</span>.<span className="green">patternPhoneNo</span>(<span className="light-green">phoheNumber</span>);</code></li>
                    <li><code><span className="pink">RegexJS</span>.<span className="green">patternDateFormat</span>(<span className="light-green">date</span>);</code></li>
                    <li><code><span className="pink">RegexJS</span>.<span className="green">patternUsername</span>(<span className="light-green">username</span>);</code></li>
                    <li><code><span className="pink">RegexJS</span>.<span className="green">patternPassword</span>(<span className="light-green">password</span>);</code></li>
                </ul>
                <h3>This is a sample code of someone writing regex pattern for validating a user's username submitted in a form:</h3><br />
                <p style={littleStyle}>
                    <code>
                        <span className="pink">const</span> <span className="green">username</span> = <span className="light-green">"john_doe"</span>;<br />
                        <span className="pink">RegexJS</span>.<span className="green">patternUsername</span>(<span className="light-green">username</span>); // This should return <span className="light-green">"true"</span> and console log <span className="light-green">"Valid username"</span>
                    </code>
                </p>
            </div>
        </>
    )
}

export default SampleCodes