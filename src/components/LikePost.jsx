
import Hoc from './Hoc'
 function LikePost(props) {


  return (
    <div>
      <button onClick={props.func}>Like Post {props.count}</button>
    </div>
  )
}
export default Hoc(LikePost)