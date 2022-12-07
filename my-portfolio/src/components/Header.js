import styles from './Header.module.css';


export function Header(){
  return(
    <div id='root'>
      <div className={styles.flexWrapper}>
        <div className={styles.picture}>
          <img src='https://www.arsenal.com/sites/default/files/styles/large/public/images/D51_9405_22480721-7dff-446d-a80f-d2566da69af1.JPG?itok=e65-8yVc'></img>
        </div>

        <div className={styles.captionContainer}>
          <p className={styles.captionText}>
          Welcome to my portfolio!
          </p>
          <p className={styles.captionText}>
            I’m currently a Computer Science concentrator at Brown University just starting out with UI and UX design. Here are some projects from my first class! 
          </p>

        </div>
      </div>
    </div>
  )

}

export default Header;