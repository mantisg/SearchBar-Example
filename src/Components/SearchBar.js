import React, {useState} from 'react'
import "./SearchBar.css"
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function SearchBar({placeholder, data}) {
	const [filterData, setFilterData] = useState([])
	const [wordsEntered, setWordsEntered] = useState("")

	const handleFilter = (event) => {
		const wordsTyped = event.target.value
		setWordsEntered(wordsTyped)
		const newFilter = data.filter((value) => {
			const regex = new RegExp(wordsTyped, 'gi')
			return value.title.match(regex) || value.author.match(regex)
		})
		if (wordsTyped === "") {
			setFilterData([])
		}
		else {
			setFilterData(newFilter)
		}
	}

	const clearInput = () => {
		setFilterData([])
		setWordsEntered("")
	}

	return (
		<div className="search">
			<div className="input">
				<input
					type= "text"
					placeholder={placeholder}
					onChange={handleFilter}
					value={wordsEntered}
				/>
				<div className="searchIcon">
					{filterData.length === 0 ? (
						<SearchIcon />
					) : (
						<CloseIcon
							id="clrBtn"
							onClick={clearInput}
						/>
					)}
				</div>
			</div>
			{filterData.length != 0 && (
				<div className="results">
					{filterData.slice(0, 15).map((value, key) => {
						return (
							<a 
								className="dataItem"
								href={value.link}
								target="_blank"
							>
								{value.title}
							</a>
						)
					})}
				</div>
			)}	
		</div>
	)
}

export default SearchBar