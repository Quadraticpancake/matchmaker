import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LandingActions from '../actions/landing';
import { routeActions } from 'react-router-redux';
import { Col, Row, Image} from 'react-bootstrap';
import css from './Home.scss';
import arrowcss from './UserScore.scss';
import rightArrowImg from '../assets/Right_arrow.svg'
import leftArrowImg from '../assets/Left_arrow.svg'

const divStyle = {
  top: 10,
  right: 10
};

const socksIconStyle = {
  width: 175,
  height: 'auto',
  marginTop: -15,
  marginBottom: 15
}

const trophyIconStyle = {
  width: 100,
  marginTop: 50,
  marginBottom: 20,
  height: 'auto'
}

const heartIconStyle = {
  width: 125,
  height: 'auto',
  marginTop: 35,
  marginBottom: 35
}

const iconHolder = {
  width: '80%',
  height: '20%',
  backgroundColor: 'blue',
  clear: 'both'
}

const iconSquare = {
  width: '30vh',
  height: '30vh',
  textAlign: 'center',
  float: 'left',
  backgroundColor: 'rgb(168, 225, 238)',
  fontFamily: 'Lobster',
  margin: '2vh',
  borderRadius: 20,
  boxShadow: '0 5px 30px 5px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
}

const parent = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}

const paraStyle = {
  margin: 5,
  fontSize: '150%'
}

const vidStyle = {
  border: '2px solid black',
  height: 350,
  width: 'auto',
  margin: 10
}

const descStyle = {
  fontSize: '150%',
  fontFamily: 'Lobster',
  // height: 350,
  width: 400,
  textAlign: 'center',
  margin: 10
}

const title = {
  fontSize: '350%',
  fontFamily: 'Lobster',
  margin: 10,
  clear: 'both'
}

class Landing extends Component {

  componentDidMount(){
    const { actions } = this.props;
    window.addEventListener('keyup', actions.changeIndex);
  }

  componentWillUnmount() {
    const { actions } = this.props;
    window.removeEventListener('keyup', actions.changeIndex);
  }

  render() {
    const { actions, index, videoCount } = this.props;
    //window.props = this.props;
    let leftArrow = <img src={leftArrowImg} className={arrowcss.arrow} onClick={() => { actions.changeIndex(-1); }} />
    let rightArrow = <img src={rightArrowImg} className={arrowcss.arrow} onClick={() => { actions.changeIndex(1); }}/>


    let videos = [];
    videos.push(<div>
          <div><img style={vidStyle} src='http://i.imgur.com/p8d5t0k.gif'/></div>
          <div><p style={descStyle}>Sign in using Facebook. The only information we need is your public profile. You can then edit your MatchMe profile.</p></div>
        </div>);
    videos.push(<div>
          <div><img style={vidStyle} src='http://i.imgur.com/nGpuchX.gif'/></div>
          <div><p style={descStyle}>Start matchmaking! Select the best match for the user on the left from the two options on the right. If there's no good match, click the 'Skip' button. Once a certain number of users make a match, the couple is connected.</p></div>
        </div>);
    videos.push(<div>
          <div><img style={vidStyle} src='http://i.imgur.com/WpjoQkt.gif'/></div>
          <div><p style={descStyle}>You earn 10 points for every match, 100 points if you matched a couple that gets connected, and 200 points if you're the vote that creates the connection! You can view your score and the connections you helped make under Score.</p></div>
        </div>);
    videos.push(<div>
          <img style={vidStyle} src='http://i.imgur.com/RAY6Ky0.gif'/>
          <p style={descStyle}>Spend the points you've earned to quick-match with users. They'll appear in your chatroom along with your other matches.</p>
        </div>);
    
    return (

      <div>

        <div style={title}>MatchMe: The best place to matchmake and match up!</div>
        <div style={iconHolder}>
          <div style={iconSquare}> <img style={socksIconStyle} src="http://i.imgur.com/ccVfBe7.png"/><p style={paraStyle}>Matchmake for other users &</p><p style={paraStyle}>Get matched with other users</p> </div>
          <div style={iconSquare}><img style={trophyIconStyle} src = 'http://i.imgur.com/l2sj0g2.png'/><p style={paraStyle}>Earn points for successful matchmaking</p></div>
          <div style={iconSquare}><img style={heartIconStyle} src='http://i.imgur.com/SuxgYjU.png'/><p style={paraStyle}>Sign up to connect</p><p style={paraStyle}>See how it all works below!</p></div>
        </div>
        
        <div style={title}>How to use MatchMe: </div>
        {videos[index]}
        <Row xs={12} sm={12} md={5} className={arrowcss.arrows}>
          {(index > 0 && leftArrow) || <div className={arrowcss.arrow}></div>}
          {((index < videoCount - 1) && rightArrow) || <div className={arrowcss.arrow}></div>}
        </Row>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    index: state.landing.index,
    videoCount: state.landing.count
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(LandingActions, dispatch),
    routerActions: bindActionCreators(routeActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);


/*
 <table>

        
          <tr>
            <th><img style={vidStyle} src='http://i.imgur.com/p8d5t0k.gif'/></th>
            <th><p style={descStyle}>Sign in using Facebook. The only information we need is your public profile. You can then edit your MatchMe profile.</p></th>
          </tr>
          
  
          <tr>
            <th><img style={vidStyle} src='http://i.imgur.com/nGpuchX.gif'/></th>
            <th><p style={descStyle}>Start matchmaking! Select the best match for the user on the left from the two options on the right. If there's no good match, click the 'Skip' button. Once a certain number of users make a match, the couple is connected.</p></th>
          </tr>

          <tr>
            <th><img style={vidStyle} src='http://i.imgur.com/WpjoQkt.gif'/></th>
            <th><p style={descStyle}>You earn 10 points for every match, 100 points if you matched a couple that gets connected, and 200 points if you're the vote that creates the connection! You can view your score and the connections you helped make under Score.</p></th>
          </tr>

          <tr>
            <th><img style={vidStyle} src='http://i.imgur.com/RAY6Ky0.gif'/></th>
            <th><p style={descStyle}>Spend the points you've earned to quick-match with users. They'll appear in your chatroom along with your other matches.</p></th>
          </tr>

        </table>
*/