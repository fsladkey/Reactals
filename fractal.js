var Fractal = React.createClass({

  getStyle: function() {
    return {
      width: this.props.size,
      height: this.props.size,
      marginLeft: this.props.leftMargin,
      marginTop: this.props.topMargin
    }
  },

  getInitialState: function() {

    return{renderDiv: (
      <div className="fractal" style={this.getStyle()} >
      </div>
    )
    }
  },

  componentDidMount: function() {
    setTimeout(function() {
      if (this.props.size > 2) {
      this.setState({
        renderDiv: (
          <div className="fractal" style={this.getStyle()} >
            < Fractal size={ this.props.size / 2 } leftMargin={this.props.size - (this.props.size / 4)} topMargin={this.props.size}/>
            < Fractal size={ this.props.size / 2 }  leftMargin={(this.props.size / 2) - (this.props.size) + (this.props.size / 4)} topMargin={this.props.size }/>
          </div>
          )
        })
      }
    }.bind(this), 1000)
  },

  render: function() {

    return (
      this.state.renderDiv
    )
  }

});
