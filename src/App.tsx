import { PresentationControls, Stage, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function Model(props: any) {
  const { scene } = useGLTF('./HTLRBR32L10_3D.glb');
  return <primitive object={scene} {...props} />
}

export const App = () => {
  return (
    <>
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ position: "absolute", width: "100%", height: "100%" }}>
        <color attach="background" args={['#333']} />
        <PresentationControls speed={1.5} global zoom={1} polar={[-Math.PI, Math.PI]}>
          <Stage environment={"sunset"}>
            <Model scale={1} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </>
  )
}