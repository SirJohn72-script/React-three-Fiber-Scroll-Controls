import React from "react";

export default function Labels() {
  return (
    <div className='pages'>
      <div className='pages_wrapper'>
        <div
          id='page-1'
          className='page page--welcome page--intro'>
          <h1 className='message'>Artics Pro One</h1>
        </div>
        <div
          id='page-2'
          className='page page--headband page--hidden'>
          <h1 className='message'>Headband</h1>
          <p className='message--sub'>
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Aspernatur quae architecto
            molestiae laudantium consequuntur.
          </p>
        </div>
        <div
          id='page-3'
          className='page page--sounds page--hidden'>
          <h1 className='message'>Sound Control</h1>
          <p className='message--sub'>
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Aspernatur quae architecto
            molestiae laudantium consequuntur.
          </p>
        </div>
        <div
          id='page-4'
          className='page page--battery page--hidden'>
          <h1 className='message'>Great Battery</h1>
          <p className='message--sub'>
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Aspernatur quae architecto
            molestiae laudantium consequuntur.
          </p>
        </div>
        <div
          id='page-5'
          className='page page--construction page--hidden'>
          <h1 className='message'>Best Construction</h1>
          <p className='message--sub'>
            Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Similique, accusamus.
          </p>
        </div>
        <div
          id='page-6'
          className='page page--brandlogo page--hidden'>
          <h1 className='message'>Get yours!</h1>
          <button className='comprar'>Buy now</button>
        </div>
      </div>
    </div>
  );
}
