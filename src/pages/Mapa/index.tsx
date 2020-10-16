import React, { useEffect, useState } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { usePosition } from 'use-position'

import api from '../../services/api'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import '../../styles/globalStyles.css'
import './styles.scss'

interface PontosColeta {
  id: string;
  nome: string;
  descricao: string;
  endereco: {
    cep: string;
    numero: number;
    logradouro: string;
    bairro: string;
    municipio: string;
    uf: string;
    ibge: number;
    geolocalizacao: {
      longitude: number;
      latitude: number;
    }
  };
}

const Mapa: React.FC = () => {
  const [position, setPosition] = useState({ lat: -22.8142434, lng: -47.0665178, z: 12 })
  const { latitude, longitude, errorMessage } = usePosition(true);
  useEffect(() => {
    console.log({ _: "useEffect::UsePosition", latitude, longitude, errorMessage })
    if (latitude && longitude) {
      setPosition({ lat: latitude, lng: longitude, z: 15 })
    }
  }, [latitude, longitude, errorMessage])

  const [pontosColeta, setPontosColeta] = useState<Array<PontosColeta>>([])
  useEffect(() => {
    api.get('/pontos-de-coleta')
      .then(({ data }) => {
        console.log({ _: "API", data })
        setPontosColeta(data)
      })
      .catch(err => {
        console.log({ _: "API::Error", err })
      })
  }, [])

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
