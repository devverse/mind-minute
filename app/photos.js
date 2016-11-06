var PhotoList = React.createClass({

  timeout : '',

  getInitialState: function() {
    return {
      photos: []
    };
  },

  startTimer: function() {
    var self = this;
    var seconds = 61;

    function tick() {
        var counter = document.getElementById("counter");
        seconds--;
        counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            self.timeout = setTimeout(tick, 1000);
        }
    }
    tick();
  },

  stopTimer: function() {
    clearTimeout(this.timeout);
    document.getElementById("counter").innerHTML = '';
  },

  onItemClick: function() {
    this.getPhotos();
  },

  componentDidMount: function() {
    this.getPhotos();
  },

  getPhotos: function() {
    this.stopTimer();
    this.serverRequest = axios.get('http://serenityscene.com/api/images').then(function(response) {
      var data = response.data;
      this.setState({
        photos: data.data[0]
      });
    }.bind(this));
  },

  render: function() {
    var self = this;
    return (
      <div className="imageContainer">
          <div className="imageContainer__image">
              <div id="counter"></div>
              <img src={"http://serenityscene.com/" + this.state.photos} width="100" height="100"/>
          </div>
          <div className="button__container">
            <button className="button__timer" onClick={self.startTimer}> Timer </button>
            <button className="button__reload" onClick={self.onItemClick}> Reload </button>
          </div>
      </div>
    );
  }
});