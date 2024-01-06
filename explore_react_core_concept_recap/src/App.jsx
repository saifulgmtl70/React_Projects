import './App.css'
import Posts from './posts'

function App(){
    return(
        <div>
            <h2>Explore React core concepts recap</h2>
            <ol>
                <li>Components</li>
                <li>JSX</li>
                <li>Props</li>
                <li>Event Handler</li>
                <li>State</li>
                <li>Load Data</li>
            </ol>
            <hr />
            <Posts></Posts>
        </div>
    )
}

export default App