import Leaflet from 'leaflet';

import marker from '../../assets/marker.svg';
import shadow from '../../assets/marker-shadow.png';

export const MapIcon = Leaflet.icon({
  iconUrl: marker,
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [39, 60],
  shadowUrl: shadow,
  shadowSize: [52, 80],
  shadowAnchor: [0, 80],
});
