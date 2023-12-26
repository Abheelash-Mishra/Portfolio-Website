import { useEffect, useRef } from 'react'
import { useGLTF, PerspectiveCamera, useAnimations, Html } from '@react-three/drei'

export function MonitorV2(props) {
	const group = useRef()
	const { nodes, materials, animations } = useGLTF('/models/MonitorV2.glb')
	const { actions, names } = useAnimations(animations, group)

	// useEffect(() => {
	// 	const action = actions[names[0]];
	// 	if (props.isActive) {
	// 		const delayed = setTimeout(() => {
	// 			if (action) {
	// 				action.setLoop(2200, 1)
	// 				action.reset().fadeIn(4).setDuration(10).play();
	// 				action.clampWhenFinished = true;
	// 			}
	// 		}, 3000)
	//
	// 		return () => clearTimeout(delayed);
	// 	}
	// }, [actions, names, props.isActive]);


	return (
		<group ref={ group } { ...props } dispose={ null }>
			<group name="Scene">
				<group
					name="Wireless_Keyboard"
					position={ [0.256, 0.006, 0.027] }
					rotation={ [-Math.PI, 1.396, -Math.PI] }
				>
					<mesh
						name="Circle001"
						geometry={ nodes.Circle001.geometry }
						material={ materials['aluminum.001'] }
						position={ [6.198, -3.629, -1.114] }
					/>
					<group
						name="Circle004"
						position={ [6.198, -3.629, -1.114] }
					>
						<mesh
							name="Circle005"
							geometry={ nodes.Circle005.geometry }
							material={ materials.aluminum }
						/>
						<mesh
							name="Circle005_1"
							geometry={ nodes.Circle005_1.geometry }
							material={ materials.light }
						/>
					</group>

					<mesh
						name="Cube014"
						geometry={ nodes.Cube014.geometry }
						material={ materials.Material }
						position={ [6.198, -3.629, -1.114] }
					/>
				</group>

				<group
					name="Black_notebook"
					position={ [0.293, 0.007, -0.545] }
					rotation={ [-Math.PI, 1.222, -Math.PI] }
					scale={ 0.112 }
				>
					<mesh
						name="bottom_cover"
						geometry={ nodes.bottom_cover.geometry }
						material={ materials['black cover.001'] }
						position={ [-0.224, 0.035, 0] }
						rotation={ [0, 0, -0.029] } scale={ 8.942 }
					/>
					<mesh
						name="lock_ring"
						geometry={ nodes.lock_ring.geometry }
						material={ materials['glossy metal'] }
						position={ [-0.625, 0.094, -0.842] }
						rotation={ [Math.PI / 2, -0.029, 0] }
						scale={ -0.094 }
					/>
					<group
						name="paperstack"
						position={ [-0.25, 0.081, 0] }
						rotation={ [0, 0, -0.029] }
						scale={ 8.942 }
					>
						<mesh
							name="Plane003"
							geometry={ nodes.Plane003.geometry }
							material={ materials['top and bottom side'] }
						/>
						<mesh
							name="Plane003_1"
							geometry={ nodes.Plane003_1.geometry }
							material={ materials['papper stack texture'] }
						/>
					</group>

					<group
						name="Top_cover"
						position={ [-0.184, 0.124, -0.008] }
						rotation={ [0, 0, -0.029] }
						scale={ 8.942 }
					>
						<mesh name="Plane002" geometry={ nodes.Plane002.geometry } material={ materials['black cover'] }/>
						<mesh name="Plane002_1" geometry={ nodes.Plane002_1.geometry } material={ materials['Material.003'] }/>
					</group>
				</group>

				<group name="Wireless_Mouse" position={ [0.243, 0, -0.213] } rotation={ [0, -1.222, 0] }>
					<group name="Base" position={ [0, 0.015, 0] }>
						<mesh name="Cube010" geometry={ nodes.Cube010.geometry } material={ materials['Mouse - Shiny Grey'] }/>
						<mesh name="Cube010_1" geometry={ nodes.Cube010_1.geometry } material={ materials['Mouse - Mat Grey'] }/>
					</group>

					<mesh name="Top" geometry={ nodes.Top.geometry } material={ materials['Mouse - Mat Grey'] } position={ [0, 0.024, 0.001] }/>
					<mesh
						name="Wheel"
						geometry={ nodes.Wheel.geometry }
						material={ materials['Mouse - Wheel Grey'] }
						position={ [0, 0.02, 0.03] }
						rotation={ [1.875, 0, 0] }
					/>
				</group>

				<PerspectiveCamera
					name="Camera"
					makeDefault={ true }
					far={ 1000 }
					near={ 0.1 }
					fov={ 22.895 }
					position={ [0.249, 0.291, -0.014] }
					rotation={ [0, Math.PI / 2, 0] }
				/>

				<mesh name="Cube" geometry={ nodes.Cube.geometry } material={ materials.Monitor } position={ [0, 0.266, 0] }>
					<mesh
						name="Cylinder"
						geometry={ nodes.Cylinder.geometry }
						material={ materials['Material.001'] }
						position={ [-0.035, -0.193, 0] }
						rotation={ [0, 0, -0.239] }
					/>

					<Html wrapperClass="box" position={[0, 0, 0]} distanceFactor={1} transform rotation-y={Math.PI/2}>
						<h1>Sup</h1>
					</Html>
				</mesh>

				<mesh
					name="Plane"
					geometry={ nodes.Plane.geometry }
					material={ materials['Brick Wall'] }
					position={ [-0.107, -0.154, -0.776] }
					rotation={ [0, 0, -Math.PI / 2] }
					scale={ [1.164, 1, 1.23] }
				/>
				<mesh
					name="Cube001"
					geometry={ nodes.Cube001.geometry }
					material={ materials['Material.002'] }
					position={ [0.146, 0, -0.394] }
					scale={ [1.89, 1, 1.044] }
				/>
				<mesh
					name="Rollerball_Pen"
					geometry={ nodes.Rollerball_Pen.geometry }
					material={ materials['Rollerball Pen'] }
					position={ [0.28, 0.017, -0.427] }
					rotation={ [0.232, 0, 0] }
				/>
			</group>
		</group>
	)
}

useGLTF.preload('/models/MonitorV2.glb')
