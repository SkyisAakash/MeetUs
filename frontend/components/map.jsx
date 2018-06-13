import React from 'react';
import ReactDOM from 'react-dom';

// we need to provide a center coordinate for our map, this is SF


// just a normal react component class :)
class Map extends React.Component {

  constructor(props) {
    super(props);
    // this.addBurritoPlace = this.addBurritoPlace.bind(this);
  }

  componentDidMount() {
    /*
     * ReactDOM.findDOMNode gets us a pointer to the actual html DOM
     * element, not its React component class instance, this is what
     * Google maps wants to render the map into this.refs is an object
     * populated by giving children a 'ref' prop when we render
     */
    const map = ReactDOM.findDOMNode(this.refs.map);

    /*
     * we make these options so when the map loads up it displays a
     * good location and zoom level, zoom of 13 show most of SF
     */
    const options = {
      center: this.props.center,
      zoom: 13
    };

    // this line actually creates the map and renders it into the DOM
    this.map = new google.maps.Map(map, options);

    // add a movement listener
    this.listenForMove();
    const marker = new google.maps.Marker({
      position: this.props.center,
      map: this.map
    });

    // we are going to add a map marker for each burrito place now
    // this.props.burritoPlaces.forEach(this.addBurritoPlace);
  }

  componentWillReceiveProps(nextProps){
    const marker = new google.maps.Marker({
      position: this.props.center,
      map: this.map
    });
  }

  // addBurritoPlace(burritoPlace) {
    /*
     * we make an instance of the google maps LatLng class, args are
     * (lat, lng)
     */
    // const pos = new google.maps.LatLng(burritoPlace.lat, burritoPlace.lng);

    /*
     * then we use our new instance of LatLng to make a marker
     * set map to this.map, this is what adds it to the map
     * when we want to remove this marker, we need to set its
     * map property to null using myMarker.setMap(null)
     */
    // const marker = new google.maps.Marker({
    //   position: pos,
    //   map: this.map
    // });

    // when the marker is clicked on, alert the name
    // marker.addListener('click', () => {
    //   alert(`clicked on: ${burritoPlace.name}`);
    // });
  // }

  listenForMove() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const bounds = this.map.getBounds();
      console.log('center',
        bounds.getCenter().lat(),
        bounds.getCenter().lng());
      console.log("north east",
        bounds.getNorthEast().lat(),
        bounds.getNorthEast().lng());
      console.log("south west",
        bounds.getSouthWest().lat(),
        bounds.getSouthWest().lng());
    });
  }

  render() {
    return (
      <div>
        <span>MAP DEMO</span>
        <div id='map' ref='map'/>
        <p>
        </p>
      </div>
    );
  }
}
export default Map;
