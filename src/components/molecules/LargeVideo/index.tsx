import ReactPlayer from 'react-player'
const LargeVideo = () => {
  return (
    <div className="large-video">
      <div className="embed-responsive embed-responsive-16by9">
        <ReactPlayer
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=c4lhP_vrpdI"
        />
      </div>
    </div>
  )
}

export default LargeVideo
