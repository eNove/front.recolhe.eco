import React, { useEffect, useState } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { usePosition } from 'use-position'

import api from '../../services/api'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { MapIcon } from '../../components/MapIcon'

import '../../styles/globalStyles.css'
import './styles.scss'

interface Material {
  descricao: string;
  id: string;
  nome: string;
}

interface PontosColeta {
  id: string;
  nome: string;
  descricao: string;
  tipoMaterial: Material[];
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
  }
}

const Mapa: React.FC = () => {
  const [position, setPosition] = useState({ lat: -22.8142434, lng: -47.0665178, z: 12 })
  const { latitude, longitude, errorMessage } = usePosition(true);
  useEffect(() => {
    if (errorMessage) {
      console.log({ _: "useEffect::UsePosition::Error", errorMessage })
    }
    if (latitude && longitude) {
      console.log({ _: "useEffect::UsePosition", latitude, longitude })
      setPosition({ lat: latitude, lng: longitude, z: 15 })
    }
  }, [latitude, longitude, errorMessage])

  const [pontosColeta, setPontosColeta] = useState<PontosColeta[]>([])
  useEffect(() => {
    api.get('/pontos-de-coleta')
      .then(({ data }: { data: PontosColeta[] }) => {
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
          {pontosColeta?.map(({ id, nome, endereco, tipoMaterial }) => (
            <Marker
              key={id}
              position={[endereco.geolocalizacao.latitude, endereco.geolocalizacao.longitude]}
              icon={MapIcon}>
              <Popup>
                <strong>{nome}</strong>
                <p>
                  {endereco.logradouro}, {endereco.numero} <br />
                  {endereco.bairro} - {endereco.municipio}/{endereco.uf} <br />
                  {endereco.cep}
                </p>
                <p>
                  <strong>Materiais:</strong> {tipoMaterial.map(({ nome }: { nome: string }) => (nome)).join(', ')}
                </p>
              </Popup>
            </Marker>
          ))}
        </Map>
        {/* Necessário para que o form do mailchimp não retorne erro quando acessando direto pela rota de mapa */}
        <form action="#" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"></form>
      </main>
      <Footer />
    </>
  )
}

export default Mapa
