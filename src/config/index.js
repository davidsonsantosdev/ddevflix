    const URL = window.location.href.includes('localhost')
    ? 'http://localhost:8082'
    : 'https://ddevflix.herokuapp.com';
  
  export default{
      URL,
  } ;