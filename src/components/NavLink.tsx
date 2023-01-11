import React from 'react'
import { forwardRef } from 'react'
import { NavLink as NavLinkRRD } from 'react-router-dom'

const NavLink = forwardRef<any, any>((props, ref): JSX.Element => (
	<NavLinkRRD
		ref={ref}
		{...props}
	>
		{props.children}
	</NavLinkRRD>
))

export default NavLink