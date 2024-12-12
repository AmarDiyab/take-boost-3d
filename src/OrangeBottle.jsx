import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);
const GltfModel = ({ ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/model/scene.glb");

  useGSAP(() => {
    gsap.to(group.current.rotation, {
      y: Math.PI * 10,
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    // PATH
    // <mesh ref={group}>
    //   <boxGeometry args={nodes?.Sketchfab_Scene.geometry} />
    //   <meshPhongMaterial />
    // </mesh>

    <group {...props} dispose={null} ref={group} className="!scale-50 mt-[10rem]">
      <group position={[0, -1, 0]} scale={0.75} >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={materials.Orange1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_1.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_2.geometry}
          material={materials.Gray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_3.geometry}
          material={materials.Orange2}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/model/scene.glb");

export default GltfModel;
