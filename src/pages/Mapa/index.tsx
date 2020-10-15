import React, { useEffect, useState } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { usePosition } from 'use-position'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import '../../styles/globalStyles.css'
import './styles.scss'

const Mapa: React.FC = () => {

  const [position, setPosition] = useState({ lat: -23.6815315, lng: -46.875481, z: 10 })

  useEffect(() => {
    console.log({ _: "useEffect::Position", position })
  }, [position])

  const { latitude, longitude, errorMessage } = usePosition(true);
  useEffect(() => {
    console.log({ _: "useEffect::UsePosition", latitude, longitude, errorMessage })
    if(latitude && longitude) {
      setPosition({ lat: latitude, lng: longitude, z: 15 })
    }
  }, [latitude, longitude, errorMessage])

  return (
    <>
      <Header className="mapa" />
      <main className="mapa">
        <Map center={[position.lat, position.lng]} zoom={position.z}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[position.lat, position.lng]}>
            <Popup>Você está aqui!</Popup>
          </Marker>
        </Map>
        {/* Necessário para que o form do mailchimp não retorne erro quando acessando direto pela rota de mapa */}
        <form action="#" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"></form>
      </main>
      <Footer />
    </>
  )
}

export default Mapa
