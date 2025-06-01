//css
import styles from './page.module.css'

//components
import BasicTabs from '../../components/Tabs/Tabs'
import { FormLogin } from './components/form';
import frameworkIcon from '@/assets/framework-icon.png'
import Image from 'next/image';

const loginHtml = (
    <FormLogin isRegister={false} />
)

const loginHtml2 = (
    <FormLogin isRegister={true} />
)

const array = [loginHtml, loginHtml2]

export default function Login() {
    return (
        <div className={styles.page_background}>
            {/* <PositionedSnackbar state={snackbar} setState={setSnackbar} text={snackbarMessage} /> */}
            <main className={styles.container}>
                {/* <Image
                className={styles.}
                    src={frameworkIcon}
                    alt="Logo Framework"
                    width={50}
                /> */}
                <BasicTabs tabsList={['Sig in', 'Register']}>
                    {array}
                </BasicTabs>
            </main>
        </div>

    )
}