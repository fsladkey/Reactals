var Fractal = React.createClass({

  render: function() {
    var style = {
      width: this.props.size,
      height: this.props.size,
      marginLeft: this.props.leftMargin,
      marginTop: this.props.topMargin
    };

    if (this.props.size > 10) {
      return(
        <div className="fractal" style={style} >
          < Fractal size={ this.props.size / 2 } leftMargin={this.props.size} topMargin={this.props.size}/>
          < Fractal size={ this.props.size / 2 }  leftMargin={(this.props.size / 2) - (this.props.size) - 2} topMargin={this.props.size }/>
        </div>
      )
    } else {
      return(
        <div className="fractal" style={style} >
        </div>
      )
    }
  }

});
