ReactDOM.render((
  <Router>
    <Route path="/" component={PhotoList}/>
    <Route path="/photos" component={PhotoList}/>
  </Router>
), document.getElementById('root'));

ReactDOM.render(
  <Navigation/>,
  document.getElementById('nav')
);