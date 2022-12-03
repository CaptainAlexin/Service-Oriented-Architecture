import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import * as mapboxgl from 'mapbox-gl'

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  mapa: mapboxgl.Map;

  ngOnInit() {

    (mapboxgl as any).accessToken = environment.mapboxKey;

    this.mapa = new mapboxgl.Map({
      container: 'mapa', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-102.3544328,21.8415473], // starting position
      zoom: 13 // starting zoom
    });

    this.crearMarcador(-102.3544328,21.8415473);

  }

  crearMarcador (lng: number, lat: number) {
    const marker = new mapboxgl.Marker({
      draggable: true
      })
      .setLngLat([lng, lat])
      .addTo(this.mapa);

      marker.on('drag', () =>{
        console.log(marker.getLngLat())
      })
  }

}
