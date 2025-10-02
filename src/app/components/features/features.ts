import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="card-soft">
    <h3>Key Features</h3>
    <ul class="mt-3">
      <li>Image-based crop quality classification (CNN transfer learning)</li>
      <li>Rule-based mapping from quality → suggested usage</li>
      <li>Nearby buyers & markets using geolocation</li>
      <li>Transport & cold storage recommendations</li>
      <li>Dashboard with map view and exportable JSON</li>
    </ul>
    <p class="mt-3 small-muted">This front-end prepares the farmer flow: upload → view suggestions → contact buyers/transport.</p>
  </div>
  `
})
export class Features {}
