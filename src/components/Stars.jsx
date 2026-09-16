import {useState, useRef,Suspense, useMemo} from 'react';
import {Canvas , useFrame} from '@react-three/fiber';
import {Points,PointMaterial,Preload} from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { div } from 'framer-motion/client';
 
const Stars = (props) => {
  const ref = useRef();
  const sphere = useMemo(() => {
    const count = 5000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1.2 * Math.cbrt(Math.random()); // uniform distribution within sphere
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial transparent color='#f272C8' size={0.0021} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
};
const StarsCanvas = () => {
  return (
    <div className='w-full   absolute inset-0 z-[-1]'>
      <Canvas 
      camera={{position:[0,0,1]}}
      >
        <Suspense fallback={null}>
          <Stars/>
        </Suspense>

        <Preload all />

      </Canvas>


    </div>
  )
}
export default StarsCanvas