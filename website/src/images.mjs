// Image registry. Every picture used on the site is listed once here.
//
// `remote` is the original file in the current WordPress media library
// (new.belach.se). Until the files are copied into assets/img/ the built pages
// point straight at those URLs. Run `node tools/fetch-images.mjs` from a normal
// office or home connection, then `node build.mjs`, and the pages switch to the
// local copies automatically (see resolve() below).
import { existsSync } from 'node:fs';

const WP = 'https://new.belach.se/wp-content/uploads/';
const imgDir = new URL('../assets/img/', import.meta.url);

export const images = {
  // photographs
  heroMultifermentor: { remote: `${WP}2018/08/multifermentor2020-scaled.jpg`, file: 'photo-multifermentor.jpg', w: 1920, h: 1531, alt: 'Belach multi-parallel fermentor system in a laboratory' },
  photoInSitu: { remote: `${WP}2019/06/IMG_2145-002-1.jpg`, file: 'photo-in-situ-bioreactor.jpg', w: 1440, h: 1920, alt: 'Stainless-steel in-situ sterilizable bioreactor built by Belach' },
  photo300L: { remote: `${WP}2019/06/300-liter-bioreactor-1.jpg`, file: 'photo-300-l-bioreactor.jpg', w: 640, h: 480, alt: '300 litre production bioreactor system' },
  photoProduction: { remote: `${WP}2019/06/Production-scale-fermentor.jpg`, file: 'photo-production-fermentor.jpg', alt: 'Production-scale fermentor' },
  photoMVC: { remote: `${WP}2019/06/MVC-005F.jpg`, file: 'photo-in-situ-detail.jpg', w: 640, h: 480, alt: 'In-situ sterilizable bioreactor installation' },
  referenceMap: { remote: `${WP}2020/05/Reference_map_2020_05_LQ-scaled.jpg`, file: 'reference-map.jpg', w: 1920, h: 677, alt: 'Map of Belach Bioteknik reference installations' },
  iso9001: { remote: `${WP}2021/04/SCAB_ISO_9001_Eng.png`, file: 'iso-9001.png', w: 258, h: 258, alt: 'ISO 9001 certified' },

  // product images (cut-outs on white)
  inSitu: { remote: `${WP}2019/06/Sterilizable-stainless-steel-bioreactors.png`, file: 'product-in-situ.png', alt: 'Sterilizable stainless-steel bioreactor' },
  inSitu2: { remote: `${WP}2019/06/Sterilizable-stainless-steel-bioreactors-2.png`, file: 'product-in-situ-2.png', alt: 'Sterilizable stainless-steel bioreactor, view 2' },
  inSitu3: { remote: `${WP}2019/06/Sterilizable-stainless-steel-bioreactors-3-1.png`, file: 'product-in-situ-3.png', alt: 'Sterilizable stainless-steel bioreactor, view 3' },
  inSitu4: { remote: `${WP}2019/06/Sterilizable-stainless-steel-bioreactors-4.png`, file: 'product-in-situ-4.png', alt: 'Sterilizable stainless-steel bioreactor, view 4' },
  benchtop: { remote: `${WP}2019/06/Benchtop-Bioreactor-Systems-gpt-1.png`, file: 'product-benchtop.png', alt: 'Benchtop bioreactor system with control tower' },
  benchtop2: { remote: `${WP}2019/06/Benchtop-Bioreactor-Systems-gpt2-1.png`, file: 'product-benchtop-2.png', alt: 'Benchtop bioreactor system, view 2' },
  airlift: { remote: `${WP}2019/06/airlift-stilizalt-1.png`, file: 'product-airlift.png', alt: 'Airlift bioreactor with glass vessel' },
  multiLab: { remote: `${WP}2018/08/Lab-Scale-Multi-Parallel-Bioreactors.png`, file: 'product-multi-parallel-lab.png', w: 1201, h: 1301, alt: 'Lab-scale multi-parallel bioreactor system with six reactors' },
  multiPilot: { remote: `${WP}2019/08/Pilot-Scale-Multi-Parallel-Bioreactors.png`, file: 'product-multi-parallel-pilot.png', alt: 'Pilot-scale multi-parallel bioreactor system' },
  biogas: { remote: `${WP}2019/06/Automated-Twin-Biogas-Reactor-System.png`, file: 'product-biogas.png', alt: 'Automated twin biogas reactor system' },
  pilot: { remote: `${WP}2019/06/Pilot-Production-Bioreactor-Systems.png`, file: 'product-pilot-production.png', alt: 'Pilot and production bioreactor system' },
  pilot2: { remote: `${WP}2019/06/pilot-485x515-1.png`, file: 'product-pilot-2.png', alt: 'Pilot bioreactor system' },
  enzymatic: { remote: `${WP}2019/06/Enzymatic-Hydrolysis-Bioreactors.png`, file: 'product-enzymatic.png', alt: 'Enzymatic hydrolysis bioreactor' },
  webBased: { remote: `${WP}2019/06/webbasedreactor.jpg`, file: 'product-web-based.jpg', alt: 'Web-based bioreactor' },
  sinkEds: { remote: `${WP}2019/06/Sink-Type-EDS.png`, file: 'product-sink-eds.png', alt: 'Sink type effluent decontamination system' },
  externalEds: { remote: `${WP}2019/06/External-Decontamination-System.png`, file: 'product-external-eds.png', alt: 'External decontamination system' },
  pilotEds: { remote: `${WP}2019/06/Pilot-EDS-Dual-Vessels-1.png`, file: 'product-pilot-eds.png', alt: 'Pilot EDS with dual kill tanks' },
  bioPilot: { remote: `${WP}2019/06/New-Bio-Pilot.jpg`, file: 'product-bio-pilot.jpg', alt: 'Bio-Pilot control system operator screen' },
  bioPhantom: { remote: `${WP}2022/03/Biophantom1.jpg`, file: 'product-biophantom.jpg', w: 784, h: 730, alt: 'BioPhantom control software process overview' },
  bioPhantom2: { remote: `${WP}2022/03/Biophantom2.jpg`, file: 'product-biophantom-2.jpg', alt: 'BioPhantom control software, trend view' },
  bioPhantom3: { remote: `${WP}2022/03/Biophantom3.jpg`, file: 'product-biophantom-3.jpg', alt: 'BioPhantom control software, control loop view' },
  bioPhantom4: { remote: `${WP}2022/03/Biophantom4.jpg`, file: 'product-biophantom-4.jpg', alt: 'BioPhantom control software, batch view' },
  belIot: { remote: `${WP}2019/11/New-Bel-Iot.jpg`, file: 'product-bel-iot.jpg', alt: 'Bel-IoT control on a tablet' },
  rental100: { remote: `${WP}2023/10/rental-50-L.png`, file: 'rental-100-l.png', alt: '100 litre stainless-steel rental bioreactor' },
  rental26: { remote: `${WP}2023/10/10L-1.png`, file: 'rental-26-l.png', alt: '26 litre stainless-steel rental bioreactor' },
  rental10: { remote: `${WP}2023/10/rental-7-L.png`, file: 'rental-10-l.png', alt: '10 litre stainless-steel rental bioreactor' },
};

// Returns { src, alt, w, h } where src is either a root-relative local path
// ("assets/img/…") or the absolute remote URL.
export function resolve(key, altOverride) {
  const im = images[key];
  if (!im) throw new Error(`Unknown image key: ${key}`);
  const local = existsSync(new URL(im.file, imgDir));
  return { src: local ? `assets/img/${im.file}` : im.remote, alt: altOverride ?? im.alt, w: im.w, h: im.h, local, key };
}

export function remoteCount() {
  return Object.values(images).filter((im) => !existsSync(new URL(im.file, imgDir))).length;
}
