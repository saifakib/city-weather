
import { useState } from 'react'
import styles from './search.module.css'

const Search = (props) => {

    const [term, setTerm] = useState('')

    let onChange = (event) => {
        event.preventDefault();
        setTerm(event.target.value)
    }

    let saveFormData = (event) => {
        event.preventDefault();
        props.searchTerm(term)
        setTerm('')
    }

    return (
    

        <form onSubmit={saveFormData}>

            <div type="flex" justify="center" align="center" className="row" >
                <div className="col-6 offset-2">
                    <span>CITY: </span>
                    <input className="form-control" className={styles.zipCodeInput}
                        name="zipCodeInput"
                        type="text"
                        value={term}
                        placeholder="Enter your zip code"
                        onChange={onChange}
                    />
                    <button type="submit" class="btn btn-primary mx-4">Search</button>
                </div>
            </div>
        </form>
    )
}

export default Search;