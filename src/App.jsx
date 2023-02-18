import { Canvas, useThree } from "@react-three/fiber";
import Box from "./component/Box";
import { OrthographicCamera, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { useState } from "react";

function App() {
  const [isDragging, setIsDragging] = useState(false);


  return (
    <div className="App">
      <div className="canvas">
        <Canvas>
          <PerspectiveCamera/>
          <ambientLight />
          <pointLight position={[10, 5, 5]} />
          <Box setIsDragging={setIsDragging}/>

          {/* <OrthographicCamera makeDefault zoom={50} position={[0, 40, 200]} /> */}

          <OrbitControls enableZoom={false} enablePan={false} />
          <axesHelper args={[5]}/>
        </Canvas>
      </div>

      <div className="scroll-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eius
          itaque pariatur iusto deleniti est culpa obcaecati nostrum, vel in.
          Optio voluptates quasi cupiditate dolore. Adipisci eligendi
          consequuntur quasi nihil?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          molestiae optio veniam error beatae nam dolores similique nihil
          deleniti quisquam quae assumenda expedita quod earum, soluta nisi
          magnam laborum, unde id ratione saepe aliquam. Cumque, temporibus
          minus. Cumque, quasi a! Totam officia ad nulla ullam maiores optio
          animi sit pariatur soluta quo unde quis, natus doloremque mollitia
          neque consequuntur quae eveniet! Cum, delectus optio. Placeat quod
          commodi, dolore enim molestias quo nesciunt minima eveniet tempore.
          Sed incidunt, quam ipsa facilis itaque asperiores esse aperiam tempore
          veritatis dolores officia culpa, enim sint voluptas doloribus facere
          distinctio neque illo! Quo, alias numquam?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          molestiae optio veniam error beatae nam dolores similique nihil
          deleniti quisquam quae assumenda expedita quod earum, soluta nisi
          magnam laborum, unde id ratione saepe aliquam. Cumque, temporibus
          minus. Cumque, quasi a! Totam officia ad nulla ullam maiores optio
          animi sit pariatur soluta quo unde quis, natus doloremque mollitia
          neque consequuntur quae eveniet! Cum, delectus optio. Placeat quod
          commodi, dolore enim molestias quo nesciunt minima eveniet tempore.
          Sed incidunt, quam ipsa facilis itaque asperiores esse aperiam tempore
          veritatis dolores officia culpa, enim sint voluptas doloribus facere
          distinctio neque illo! Quo, alias numquam?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          molestiae optio veniam error beatae nam dolores similique nihil
          deleniti quisquam quae assumenda expedita quod earum, soluta nisi
          magnam laborum, unde id ratione saepe aliquam. Cumque, temporibus
          minus. Cumque, quasi a! Totam officia ad nulla ullam maiores optio
          animi sit pariatur soluta quo unde quis, natus doloremque mollitia
          neque consequuntur quae eveniet! Cum, delectus optio. Placeat quod
          commodi, dolore enim molestias quo nesciunt minima eveniet tempore.
          Sed incidunt, quam ipsa facilis itaque asperiores esse aperiam tempore
          veritatis dolores officia culpa, enim sint voluptas doloribus facere
          distinctio neque illo! Quo, alias numquam?
        </p>
      </div>
    </div>
  );
}

export default App;
