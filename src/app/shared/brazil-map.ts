import { Component, input } from '@angular/core';

/**
 * Contorno simplificado do Brasil (longitude, latitude), no sentido horário a partir de Roraima.
 * É um desenho estilizado, não um mapa cartográfico preciso.
 */
const BRAZIL: [number, number][] = [
  [-60.7, 5.2], [-59.8, 4.3], [-58.0, 4.0], [-56.5, 2.0], [-54.0, 2.3], [-51.6, 4.4], [-50.0, 1.8],
  [-49.9, 0.2], [-48.5, -0.8], [-46.0, -1.0], [-44.3, -2.5], [-41.8, -2.9], [-38.5, -3.7], [-36.5, -5.0],
  [-35.3, -5.2], [-34.8, -7.1], [-34.9, -8.0], [-35.7, -9.7], [-37.1, -10.9], [-38.5, -13.0], [-39.0, -14.8],
  [-39.2, -17.7], [-40.3, -20.3], [-41.0, -21.7], [-42.0, -22.9], [-43.2, -23.0], [-44.7, -23.4], [-46.3, -24.0],
  [-48.5, -25.5], [-48.5, -27.6], [-49.5, -29.0], [-50.3, -30.5], [-51.8, -32.3], [-53.4, -33.7], [-53.5, -32.5],
  [-55.5, -31.0], [-57.6, -30.2], [-56.0, -28.1], [-54.6, -25.6], [-54.3, -24.0], [-55.6, -22.6], [-57.8, -22.1],
  [-58.1, -20.2], [-57.6, -19.0], [-58.4, -16.3], [-60.2, -15.1], [-60.4, -13.5], [-62.2, -13.0], [-63.6, -12.5],
  [-65.3, -10.9], [-65.4, -9.7], [-67.5, -10.6], [-68.6, -11.0], [-70.6, -11.0], [-70.5, -9.5], [-72.4, -10.0],
  [-73.8, -7.3], [-73.0, -5.0], [-69.9, -4.2], [-69.4, -1.1], [-69.9, 1.1], [-67.0, 2.0], [-66.9, 1.2],
  [-64.0, 1.6], [-63.4, 2.2], [-64.0, 4.0], [-62.0, 4.2],
];
const K = 8;
const x = (lon: number) => +((lon + 75) * K).toFixed(1);
const y = (lat: number) => +((6 - lat) * K).toFixed(1);
const POINTS = BRAZIL.map(([lon, lat]) => `${x(lon)},${y(lat)}`).join(' ');

/** Mapinha do Brasil nas cores do tema, com um ponto na cidade. */
@Component({
  selector: 'app-brazil-map',
  template: `
    <figure class="br-map">
      <svg viewBox="0 0 330 330" role="img" [attr.aria-label]="label()">
        <polygon class="land" [attr.points]="points" />
        <circle class="pulse" [attr.cx]="cx()" [attr.cy]="cy()" r="11" />
        <circle class="pin" [attr.cx]="cx()" [attr.cy]="cy()" r="10" />
      </svg>
      <figcaption class="mono">{{ label() }}</figcaption>
    </figure>`,
})
export class BrazilMap {
  /** coordenadas da cidade (padrão: São Paulo) */
  readonly lon = input(-46.63);
  readonly lat = input(-23.55);
  readonly label = input('São Paulo · Brasil');
  protected readonly points = POINTS;
  protected cx = () => x(this.lon());
  protected cy = () => y(this.lat());
}
