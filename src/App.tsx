import { PresentationControls, Stage, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function Model(props: any) {
  const { scene } = useGLTF('./HTLRBR32L10_3D.glb');
  return <primitive object={scene} {...props} />
}

export const App = () => {
  return (
    <>
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ position: "absolute", width: "500px", height: "500px" }}>
        <color attach="background" args={['#101010']} />
        <PresentationControls speed={1.5} global zoom={0.5} polar={[-Math.PI, Math.PI]}>
          <Stage environment={undefined}>
            <Model scale={1} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </>
  )
}