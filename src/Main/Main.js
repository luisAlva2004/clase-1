import Counter from './Counter'
import img from './img/gato.jpg'

function Main() {
  return (
    <div>
         <Counter datos={['Luis Gerardo Alvarado Moreno','20963','5A']}/>
         <img src={img} alt="gato.jpg"></img>
    </div>
  )
}

export default Main