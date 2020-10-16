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
      longitude: string;
      latitude: string;
    }
  };
}

const Mapa: React.FC = () => {

  const [position, setPosition] = useState({ lat: -23.6815315, lng: -46.875481, z: 10 })

  const IdMunicipio = '3509502' //Campinas
  const [pontosColeta, setPontosColeta] = useState<PontosColeta[]>([])

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

  useEffect( () => {
    api.get(`/pontos-de-coleta/municipio/${IdMunicipio}`)
      .then(res => {
        setPontosColeta(res.data)
      })
      .catch(err => {
        // TODO: retorno de erro
        console.log(err.description)
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
