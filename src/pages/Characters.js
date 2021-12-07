const Characters = ({ allCharacters }) => {
  //   const dataC = props.allCharacters.characters;
  const { characters } = allCharacters;
  return (
    <>
      <h1>Characters</h1>
      <br />
      {characters.map((character) => (
        <p>{character.name}</p>
      ))}
    </>
  );
};

export default Characters;
