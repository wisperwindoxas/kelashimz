import { FC, PropsWithChildren } from 'react'

import { IMeta } from '@/types/meta.types'

import Meta from '../meta/Meta'

import styles from './Layout.module.scss'
import Footer from './footer/Footer'
import Header from './header/Header'

const Layout: FC<PropsWithChildren<IMeta>> = ({
	description,
	keywords,
	title,
	children
}) => {
	return (
		<Meta title={title} description={description} keywords={keywords}>
			<div className={styles.layout}>
				<Header />
				<main className={styles.main}>{children}</main>
				<Footer />
			</div>
		</Meta>
	)
}

export default Layout
