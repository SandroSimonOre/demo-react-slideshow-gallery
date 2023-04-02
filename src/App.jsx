// https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp
import { useState } from 'react'
import styles from './App.module.css'

function App() {

  const [currentSlide, setCurrentSlide] = useState(1)
  
  const data = [
    {id: 1, fileName: 'img_woods_wide.jpg', description: 'The Woods'},
    {id: 2, fileName: 'img_5terre_wide.jpg', description: 'Cinque Terre'},
    {id: 3, fileName: 'img_mountains_wide.jpg', description: 'Mountains and fjords'},
    {id: 4, fileName: 'img_lights_wide.jpg', description: 'Northern Lights'},
    {id: 5, fileName: 'img_nature_wide.jpg', description: 'Nature and sunrise'},
    {id: 6, fileName: 'img_snow_wide.jpg', description: 'Snowy Mountains'}
  ]

  const nextSlide = () => {
    if (currentSlide === 6) {
      setCurrentSlide(1) 
    } else {
      setCurrentSlide(p => p + 1)
    }
  }

  const previousSlide = () => {
    if (currentSlide === 1) {
      setCurrentSlide(6) 
    } else {
      setCurrentSlide(p => p - 1)
    }
  }

  return (
    <div>
        <div className={styles.container}>
       
          {
            data.map((d) => (
              <div 
                key={d.id} 
                className={`${currentSlide === d.id ? styles.visible : styles.hidden }`}>
                <div className={styles.numberText}>{`${d.id} / ${data.length}`}</div>
                <img src={`/images/${d.fileName}`} alt="" />
              </div>  
            ))
          }
        
          {/** Next and previous buttons */}
          <span className={styles.prev} onClick={previousSlide}>&#10094;</span>
          <span className={styles.next} onClick={nextSlide}>&#10095;</span>

          {/** Image text */}
          <div className={styles.captionContainer}>
            <p>{data[currentSlide - 1].description}</p>
          </div>

          {/** Thumbnail images */}
          <div className={styles.row}>
            {
              data.map((d) => (
                <div key={d.id}>
                  <img 
                    className={`${styles.thumbnail} ${styles.cursor} ${currentSlide === d.id && styles.active}`} 
                    src={`/images/${d.fileName}`} 
                    onClick={() => setCurrentSlide(d.id)}
                    alt="" 
                  />
                </div>  
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default App
