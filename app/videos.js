var VideoList = React.createClass({
  getInitialState: function() {
    return {
      videos: []
    };
  },

  componentDidMount: function() {
    this.serverRequest = axios.get('http://serenityscene.com/api/videos').then(function(response) {
      var data = response.data;
      this.setState({
        videos: data.data
      });
    }.bind(this));
  },

  render: function() {
    var self = this;

    return (
      <div>
        {
          this.state.videos.map(function(photo) {
            return (
              <div onClick={self.onItemClick.bind(this, video)}> 
                  <img src={"http://serenityscene.com/" + video} width="100" height="100"/>
              </div>
              )
          })
        }
      </div>
    );
  }
});

var VideoView = React.createClass({
  render: function() {
    return (
      <div>
      </div>
    )
  }
});