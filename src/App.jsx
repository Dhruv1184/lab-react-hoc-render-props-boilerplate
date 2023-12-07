import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import Common from './RendeProps/Common';
import LikeRender from './RendeProps/LikeRender';
import PostRender from './RendeProps/PostRender';
function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <LikePost/>
        <LikeImage/>
      </div>
      <h3>Render Props</h3>
      <div>
        <Common render ={ (count,func)=>{ return <LikeRender count = {count} func = {func}/> }}/>
        <Common render ={ (count,func)=>{ return <PostRender count = {count} func = {func}/> }}/>

      </div>
    </div>
  );
}

export default App;
