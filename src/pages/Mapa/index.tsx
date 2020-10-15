import React, { useEffect } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import '../../styles/globalStyles.css'
import './styles.scss'

const Mapa: React.FC = () => {

  const data = {
    lat: -23.6815315,
    lng: -46.875481,
    zoom: 10,
  }

  return (
    <>
      <Header className="mapa" />
      <main className="mapa">
        <Map center={[data.lat, data.lng]} zoom={data.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[data.lat, data.lng]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
          </Marker>
        </Map>
      </main>
      <Footer />
    </>
  )
}

export default Mapa
