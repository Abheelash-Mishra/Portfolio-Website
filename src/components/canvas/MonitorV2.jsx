import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export function MonitorV2(props) {
  const { nodes, materials } = useGLTF('/models/MonitorV2.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.256, 0.006, 0.027]} rotation={[-Math.PI, 1.396, -Math.PI]}>
        <mesh geometry={nodes.Circle001.geometry} material={materials['aluminum.001']} position={[6.198, -3.629, -1.114]} />
        <group position={[6.198, -3.629, -1.114]}>
          <mesh geometry={nodes.Circle005.geometry} material={materials.aluminum} />
          <mesh geometry={nodes.Circle005_1.geometry} material={materials.light} />
        </group>
        <mesh geometry={nodes.Cube014.geometry} material={materials.Material} position={[6.198, -3.629, -1.114]} />
      </group>
      <group position={[0.293, 0.007, -0.545]} rotation={[-Math.PI, 1.222, -Math.PI]} scale={0.112}>
        <mesh geometry={nodes.bottom_cover.geometry} material={materials['black cover.001']} position={[-0.224, 0.035, 0]} rotation={[0, 0, -0.029]} scale={8.942} />
        <mesh geometry={nodes.lock_ring.geometry} material={materials['glossy metal']} position={[-0.625, 0.094, -0.842]} rotation={[Math.PI / 2, -0.029, 0]} scale={-0.094} />
        <group position={[-0.25, 0.081, 0]} rotation={[0, 0, -0.029]} scale={8.942}>
          <mesh geometry={nodes.Plane003.geometry} material={materials['top and bottom side']} />
          <mesh geometry={nodes.Plane003_1.geometry} material={materials['papper stack texture']} />
        </group>
        <group position={[-0.184, 0.124, -0.008]} rotation={[0, 0, -0.029]} scale={8.942}>
          <mesh geometry={nodes.Plane002.geometry} material={materials['black cover']} />
          <mesh geometry={nodes.Plane002_1.geometry} material={materials['Material.003']} />
        </group>
      </group>
      <group position={[0.243, 0, -0.213]} rotation={[0, -1.222, 0]}>
        <group position={[0, 0.015, 0]}>
          <mesh geometry={nodes.Cube010.geometry} material={materials['Mouse - Shiny Grey']} />
          <mesh geometry={nodes.Cube010_1.geometry} material={materials['Mouse - Mat Grey']} />
        </group>
        <mesh geometry={nodes.Top.geometry} material={materials['Mouse - Mat Grey']} position={[0, 0.024, 0.001]} />
        <mesh geometry={nodes.Wheel.geometry} material={materials['Mouse - Wheel Grey']} position={[0, 0.02, 0.03]} rotation={[1.875, 0, 0]} />
      </group>
      <PerspectiveCamera makeDefault={true} far={1000} near={0.1} fov={22.895} position={[1.127, 0.696, 0.803]} rotation={[-0.534, 0.763, 0.388]} />
      <mesh geometry={nodes.Cube.geometry} material={materials.Monitor} position={[0, 0.266, 0]}>
        <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.001']} position={[-0.035, -0.193, 0]} rotation={[0, 0, -0.239]} />
      </mesh>
      <mesh geometry={nodes.Plane.geometry} material={materials['Brick Wall']} position={[-0.107, -0.039, -0.776]} rotation={[0, 0, -Math.PI / 2]} scale={[1.029, 1, 1.23]} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.002']} position={[0.146, 0, -0.394]} scale={[1.89, 1, 1.044]} />
      <mesh geometry={nodes.Rollerball_Pen.geometry} material={materials['Rollerball Pen']} position={[0.28, 0.017, -0.427]} rotation={[0.232, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/models/MonitorV2.glb')
