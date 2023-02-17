import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Box from "./component/Box";

function App() {
  return (
    <div className="App">
      <div className="canvas">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[0, 0, 0]} />
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
