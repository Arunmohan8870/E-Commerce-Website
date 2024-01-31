import React from 'react'


export default function Success() {


  // const placed = (e) => {
  //         e.preventDefault();
  //         const values = e.target.value;
  //         console.log(values)

  //         if (values==true) {
  //            alert('not value')
  //         } else {
  //             alert("please check your phone number");
  //         }
  //   };
  return (
    <form>
      <div className='details mt-5'>
        <h2>Enter Your Details</h2>
        <div className='details-2'>

          <div className='details-3'>

            <table>
              <tr>
                <input
                  type="text"
                  placeholder='Name....'
                  required

                />
                <input
                  type="number"
                  placeholder='Mobile Number....'
                  required

                />
              </tr>
              <tr aria-colspan={2}>

                <textarea name="address"
                  placeholder='Address...'
                  cols="49" rows="4">
                </textarea>
              </tr>
              <tr>
                <input
                  type="text"
                  placeholder='City/Town'

                />
                <input
                  type="text"
                  list='cars'
                  placeholder='State' />
                <datalist id="cars">
                  <option value="Tamilnadu" />
                  <option value="Kerala" />
                  <option value="Antra" />
                  <option value="Karnataka" />
                  <option value="Mumbai" />
                </datalist>
              </tr>
            </table>
          </div>
          <div className='options mt-3'>
            <input
              type="checkbox"
              name='radio'
            />
            Home ( All Day Delivary )

          </div>

          <div className='button mt-3'>
            <button className='btn btn-warning ' onClick={placed}>Save And Deliver Here</button>

          </div>

        </div>
      </div>
    </form>
  )
}

const placed = (e) => {
  e.preventDefault();
  const show = e.target.value
  console.log(show)
  if (show === " ") {
    alert("invalid")
  } else {
    alert("Your Order has been Delayed .... invalid Details")
  }

}
