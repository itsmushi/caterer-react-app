export function PinInputComponent({ pin }) {
  return (
    <div className="inputpin d-flex justify-content-around mx-auto">
      <div className="pinbox">
        <h4 className="text-center my-4"> {pin.split('')[0] ?? ''} </h4>
        <hr className="pinline mx-2"></hr>
      </div>
      <hr className="pinline mx-2 w-10 my-5"></hr>
      <div className="pinbox">
        <h4 className="text-center my-4">{pin.split('')[1] ?? ''}</h4>
        <hr className="pinline mx-2"></hr>
      </div>
      <hr className="pinline mx-2 w-10 my-5"></hr>
      <div className="pinbox">
        <h4 className="text-center my-4">{pin.split('')[2] ?? ''}</h4>
        <hr className="pinline mx-2"></hr>
      </div>
      <hr className="pinline mx-2 w-10 my-5"></hr>
      <div className="pinbox">
        <h4 className="text-center my-4">{pin.split('')[3] ?? ''}</h4>
        <hr className="pinline mx-2"></hr>
      </div>
    </div>
  )
}
