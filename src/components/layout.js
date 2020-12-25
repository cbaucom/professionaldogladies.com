/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import './layout.css'

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<>
			<div
				style={{
					alignItems: `center`,
					display: `flex`,
					flexDirection: `column`,
					justifyContent: `center`,
					margin: `0 auto`,
					width: `100%`,
				}}
			>
				<main style={{ margin: `0 auto`, width: `100%` }}>{children}</main>
			</div>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
