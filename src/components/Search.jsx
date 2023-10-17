import React, {useRef} from 'react';

function Search({ filterUpdate }) {
  const input = useRef(null);

  function handleChange() {
    const val = input.current.value;
    filterUpdate(val);
  }

  return (
    <form>
      <input 
        type="text"
        placeholder="Type to Filter"
        ref={input}
        onChange={handleChange}
      />
    </form>
  );
}
export default Search;
