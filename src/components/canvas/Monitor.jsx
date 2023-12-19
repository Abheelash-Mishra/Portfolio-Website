import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera, Html } from '@react-three/drei'

export function MonitorModel(props) {
	const { nodes, materials } = useGLTF('/models/Monitor.glb')
	return (
		<group { ...props } dispose={ null }>
			<PerspectiveCamera
				makeDefault={ true }
				far={ 1000 }
				near={ 0.1 }
				fov={ 22.895 }
				position={ [1.393, 0.427, 0.001] }
				rotation={ [-1.62, 1.431, 1.621] }
			/>

			<mesh
				geometry={ nodes.Cube001.geometry }
				material={ materials['Material.002'] }
				position={ [0.124, 0, 0.033] }
			/>

			<mesh
				geometry={ nodes.Cube.geometry }
				material={ materials.Monitor }
				position={ [0, 0.266, 0] }
			>
				<Html wrapperClass="box" scale={0.8} position={[0, 0.22, 0]} distanceFactor={0.9} transform rotation-y={Math.PI/2}>
					<div className="flex flex-col items-center bg-black scale-150 text-cyberpunkYellow">
						<h1 className="text-4xl font-bold">Hello World</h1>
						<p className="text-xl font-semibold">This is a test</p>
					</div>
				</Html>
				<mesh
					geometry={ nodes.Cylinder.geometry }
					material={ materials['Material.001'] }
					position={ [-0.035, -0.193, 0] }
					rotation={ [0, 0, -0.239] }
				/>
			</mesh>
		</group>
	)
}

useGLTF.preload('/models/Monitor.glb')
