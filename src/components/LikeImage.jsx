import Hoc from './Hoc'
function LikeImage(props) {

  return (
    <div>
      <button onClick={props.func}>Like Image {props.count}</button>
    </div>
  )
}
export default Hoc(LikeImage)