import SampleCodes from '../components/SampleCodes'

const GetStarted = () => {
    return (
        <>
            <div id="get-started">
                <h1 className="sub-header">Get Started</h1>
                <h2>Want to start building your project with RegexJS? Here's a guide on how you can setup RegexJS and embed it on your amazing projects:</h2>
                <p>You can add RegexJS to your project via CDN, by adding the CDN link, <code>https://regexjs.vercel.app/lib/regex.min.js</code> to the script tag in your HTML file in your codebase &rarr; <code title="https://regexjs.vercel.app/lib/regex.min.js"><span className="pink">&lt;script</span> <span className="green">src</span>=<span className="light-green">"https://regexjs.vercel.app/lib/regex.min.js"</span><span className="pink">&gt;</span><span className="pink">&lt;/script&gt;</span></code></p><br />
                <p><span className='pink'>*</span>Adding RegexJS via <span className="pink">NPM</span> isn't yet available right now</p><br />
                Now you have successfully installed & setup RegexJS in your project directory 🎉🎉!!!
            </div>
            <SampleCodes />
        </>
    )
}

export default GetStarted