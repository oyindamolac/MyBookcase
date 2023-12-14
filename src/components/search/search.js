
export default function search ({searchValue, setSearchValue}) {
    // searchvalue props is a placeholder for the state that we are expecting 
    // setSearchvalue props is a place holder for the 2update state"
    return(
        <form>
            {searchValue &&<p>{searchValue}</p>}
            <input
                 type ="search"
                 value={searchValue}
                 onchange={e => setSearchValue(e.target.value)}
                 />
                 <button>submit </button>
        </form>
  )}
