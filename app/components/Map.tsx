import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import {Icon} from "leaflet";

export default function MyMap(props: any) {
  const { position, zoom } = props

  return <MapContainer center={position} zoom={zoom} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position} icon={new Icon({
      iconUrl: 'images/marker.png',
		iconSize: [19, 33],
		iconAnchor:   [18, 33],
		popupAnchor:  [0, -35],
    })}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
}