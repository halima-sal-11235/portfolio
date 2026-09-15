import {useState, useRef,Suspense, useMemo} from 'react';
import {Canvas , useFrame} from '@react-three/fiber';
import {Points,PointMaterial,Preload} from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { div } from 'framer-motion/client';


const Stars = (props) => {
  const ref= useRef();
  const sphere =useMemo(()=>{
    const points = random.inSphere(new Float32Array(5000), {radius:1.2});
    for(let i =0;i < Points.length;i++){
    if(isNaN(points[i]))
      points[i] =0;
  }
  return points ;
  },[])
  
  

 useFrame((state,delta) => {
  ref.current.rotation.x -= delta / 10 ;
  ref.current.rotation.y -= delta / 15 ;
 })
  return (
     <group rotation={[0,0,Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>

        <PointMaterial transparent color='#f272C8' size={0.0025} sizeAttenuation={true} depthWrite={false} />
      </Points>
     </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className='w-full  h-[850px] mt-[6000px] ()  absolute inset-0 z-[-1]'>
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