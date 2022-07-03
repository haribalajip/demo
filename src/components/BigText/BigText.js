import styles from './BigText.module.scss';
import { createRef } from 'react';
const myRef = createRef();

function Header(props) {
	const handleClick = () => console.log(myRef.current.innerHTML);
	return (
		<div ref={myRef}
			onClick={handleClick}
			className={styles['heading-text']}>{props.text}
			<p className={styles.subtext}>Greeting</p>
		</div>
	)
}

export default Header;