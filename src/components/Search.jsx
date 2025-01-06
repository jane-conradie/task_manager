const Search = ({ setSearchString }) => {
  const handleInputFieldChange = (event) => {
    setSearchString(event.target.value);
  };

  return <input type="text" onChange={handleInputFieldChange} />;
};

export default Search;
