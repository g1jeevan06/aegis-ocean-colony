// Export the colony's static geometry as a .glb blockout for Unreal Engine
// (File > Import Into Level, or the glTF importer).  Units are metres, Y-up;
// Unreal's importer converts to centimetres / Z-up.
import * as THREE from 'three';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';

export async function exportLevel(meshes, onStatus) {
  const root = new THREE.Scene();
  root.name = 'AEGIS_Colony';
  const groups = new Map();
  for (const m of meshes) {
    const [chunk, mat] = m.name.split(':');
    let g = groups.get(chunk);
    if (!g) { g = new THREE.Group(); g.name = 'SM_' + chunk; groups.set(chunk, g); root.add(g); }
    // weld the batched triangle soup back into an indexed mesh (much smaller file)
    const c = new THREE.Mesh(mergeVertices(m.geometry.clone(), 1e-4), m.material);
    c.name = 'SM_' + chunk + '_' + (mat || 'mat');
    g.add(c);
  }
  onStatus && onStatus('Packing ' + meshes.length + ' meshes…');
  const exporter = new GLTFExporter();
  const glb = await exporter.parseAsync(root, { binary: true, onlyVisible: false, maxTextureSize: 1024 });
  const blob = new Blob([glb], { type: 'model/gltf-binary' });
  return blob;
}

export function download(blob, name) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = name;
  document.body.appendChild(a); a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 2000);
}
