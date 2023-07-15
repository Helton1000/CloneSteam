import styles from './navbar.module.css'
import { BsCart4 } from 'react-icons/bs'
import Input from '@/components/forms/input/input'
import Logo from '@/components/logo/logo'
import CartButton from '@/components/forms/cartButton/cartButton'

export default function Navbar({cart, onRemove}){
    return(
        <nav className={styles.navbar}>
            <Logo />
            <div className={styles.search}>
                <Input placeholder="Buscar" fullWidth/>
            </div>
            <CartButton cart={cart} onRemove={onRemove} />
        </nav>
    )
}