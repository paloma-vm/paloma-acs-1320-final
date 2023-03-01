import Heading from './Heading'
import MetalMeta from './MetalMeta'
import data from './metal.json'

function App() {
  return (
    <div class="">
      <Heading
        number_of_bands={data.length} 
      />
      <MetalMeta />
    </div>
  );
}

export default App;
