import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(0, 0.1, 6.8);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.12, 2), new THREE.MeshBasicMaterial({ color: 0x65cdd9, wireframe: true, transparent: true, opacity: 0.8 }));
    const inner = new THREE.Mesh(new THREE.IcosahedronGeometry(0.72, 1), new THREE.MeshBasicMaterial({ color: 0xe8ece5, wireframe: true, transparent: true, opacity: 0.32 }));
    group.add(core, inner);

    const ringMaterial = new THREE.MeshBasicMaterial({ color: 0x86bfc5, transparent: true, opacity: 0.58 });
    const ringOne = new THREE.Mesh(new THREE.TorusGeometry(1.7, 0.012, 8, 100), ringMaterial);
    ringOne.rotation.set(0.8, 0.2, -0.2);
    const ringTwo = new THREE.Mesh(new THREE.TorusGeometry(1.95, 0.008, 8, 100), ringMaterial.clone());
    ringTwo.material.opacity = 0.32;
    ringTwo.rotation.set(-0.55, 0.9, 0.35);
    group.add(ringOne, ringTwo);

    const positions = new Float32Array(220 * 3);
    for (let index = 0; index < 220; index += 1) {
      const radius = 2.4 + Math.random() * 1.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[index * 3 + 2] = radius * Math.cos(phi);
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(particleGeometry, new THREE.PointsMaterial({ color: 0xc5d9d5, size: 0.025, transparent: true, opacity: 0.7 }));
    group.add(particles);

    const pointer = { x: 0, y: 0 };
    const onPointerMove = (event) => {
      const bounds = mount.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      pointer.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    };
    mount.addEventListener('pointermove', onPointerMove);
    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(mount);
    resize();

    let frameId;
    const startTime = performance.now();
    const animate = () => {
      const elapsed = (performance.now() - startTime) / 1000;
      frameId = requestAnimationFrame(animate);
      group.rotation.y += (pointer.x * 0.22 - group.rotation.y) * 0.025;
      group.rotation.x += (-pointer.y * 0.14 - group.rotation.x) * 0.025;
      core.rotation.x = elapsed * 0.12;
      inner.rotation.y = -elapsed * 0.18;
      ringOne.rotation.z = elapsed * 0.16;
      ringTwo.rotation.x = -elapsed * 0.11;
      particles.rotation.y = elapsed * 0.025;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      mount.removeEventListener('pointermove', onPointerMove);
      mount.removeChild(renderer.domElement);
      particleGeometry.dispose();
      particles.material.dispose();
      [core, inner, ringOne, ringTwo].forEach((mesh) => { mesh.geometry.dispose(); mesh.material.dispose(); });
      renderer.dispose();
    };
  }, []);

  return <div className="hero-scene" ref={mountRef} aria-label="Interactive 3D systems visualization" />;
}
