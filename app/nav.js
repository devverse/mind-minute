var Navigation = React.createClass({

  getInitialState: function() {
    return {
      items: [
        { 'name' : 'Home', 'route' : hashHistory.createHref('/')},
        { 'name' : 'Photos', 'route' : hashHistory.createHref('photos')},
      ]
    };
  },

  render: function() {
    return (
      <div>
        {
          this.state.items.map(function(item) {
            return (
              <li> 
                <Link href={item.route}>{item.name}</Link>
              </li>
            )
          })
        }
      </div>
    )
  }
});