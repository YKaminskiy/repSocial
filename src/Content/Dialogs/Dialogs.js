import styles from "./Dialogs.module.css"


const Dialogs = () => {
    return (

        <div className={styles.dialogs}>

            <div className={styles.messages}> Messages
                <div className={styles.message}>It is a long established fact that a reader will be distracted</div>
                <div className={styles.message}>Lorem Ipsum is that it has a more-or-less normal distribution</div>
                <div className={styles.message}>Pellentesque ac ex et dui hendrerit cursus.</div>
                <div className={styles.message}>Donec sodales pulvinar imperdiet.</div>


            </div>


            <div className={styles.peoples}> Users

                <div className={styles.people}> Mike</div>
                <div className={styles.people}> Hope</div>
                <div className={styles.people}> Jane</div>
                <div className={styles.people}> Eve</div>

            </div>


        </div>
    )
}


export default Dialogs;
