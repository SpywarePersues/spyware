function Navbar() {
    return (
        <div>
            <nav>
                <ol className="nav--ol">
                    <a href="index.html">
                        <li className="li-1"><span className="plain-green-text">01.</span> About</li>
                    </a>
                    <a href="index.html">
                        <li className="li-2"><span className="plain-green-text">02.</span> Projects</li>
                    </a>
                    <a href="blogs.html"> 
                        <li className="li-3"><span className="plain-green-text">03.</span> Blogs</li>
                    </a>
                    <a href="index.html"> 
                        <li className="li-4"><span className="plain-green-text">04.</span> Contact</li>
                    </a> 
                </ol>
                <button className="nav--btn"><a href="mailto:spywarepersues284@gmail.com">Say Hi</a></button>
                <a href="index.html">
                    <img src="img/MasterPiece-modified.png" className="nav--logo"></img>
                </a>
            </nav>
        </div>
    )
}

function App() {
    return (
        <div>
            <Navbar />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))