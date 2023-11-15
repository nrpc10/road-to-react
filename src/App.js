import React from 'react';

const List = (props) => (
    <ul>
    {props.list.map((item) => 
    <Item key={item.objectID} item={item} />
   )};
    </ul>
);

const Item = (props) => (

  <li>
    <h2>{props.item.title}</h2>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
  </li>
  );
 
  const Search = (props) => {
    const [searchTerm, setSearchTerm] = React.useState(' ');

    const handleChange = (e) => {
      setSearchTerm(e.target.value);

      // C
      props.onSearch(e);
    };

    return (
        <div>
          <label htmlFor="search">Search: </label>
          <input id="search" type="text" onChange={props.onChange} />
          <button type='submit'>Add</button>
        <p>
          Searching for <strong>{searchTerm}</strong>.
        </p>

        </div>
      );
  };
     
const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState('');
  // A
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <h1>My Hacker Stories</h1>
 
      {/* // B */}
      <Search onSearch={handleSearch} />

      <hr />

     <List list={stories} />

    </div>
  );
};

export default App;
