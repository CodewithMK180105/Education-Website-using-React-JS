import './Title.css'

const Title = (props) => {
  return (
    <div>
      <div className="title">
        <p>{props.subTitle}</p>
        <h2>{props.title}</h2>
      </div>
    </div>
  )
}

export default Title