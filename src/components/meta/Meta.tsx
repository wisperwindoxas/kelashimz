import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'

import { IMeta } from '@/types/meta.types'

import { getTitle } from './meta.helper'

const Meta: FC<PropsWithChildren<IMeta>> = ({
	description,
	keywords,
	title,
	children
}) => {
	const { asPath } = useRouter()

	return (
		<>
			{description ? (
				<>
					<Head>
						<meta charSet='utf-8' />
						<title>{getTitle(title)}</title>
						<meta name='og:title' content={getTitle(title)} />
						<meta name='description' content={description} />
						<meta name='og:description' content={description} />
						<meta http-equiv='X-UA-Compatible' content='IE=edge' />
						<meta
							name='viewport'
							content='width=device-width, initial-scale=1.0'
						/>
						<meta name='keywords' content={keywords} />
						<meta name='og:type' content='Ad' />
						<meta name='og:region' content='UZB' />
						<meta name='og:url' content={asPath} />
					</Head>
					{children}
				</>
			) : (
				<>
					<Head>
						<meta name='robots' content='noindex, nofollow' />
					</Head>
					{children}
				</>
			)}
		</>
	)
}

export default Meta
