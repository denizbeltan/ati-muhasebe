import { FC } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import { checkIsActive, WithChildren } from '../../_metronic/helpers'

type Props = {
    to: string
    title: string
}

const HtmlMenuItem: FC<Props & WithChildren> = ({
    children,
    to,
    title
}) => {
    const { pathname } = useLocation()
    const isActive = checkIsActive(pathname, to)

    return (
        <>
            {/* {/* begin::Nav item */}
            <li className="nav-item">
                <Link className={clsx('nav-link text-active-primary py-5 me-6', { active: isActive })} to={to}>
                    {title}
                </Link>
            </li>
            {/* {/* end::Nav item */}
            {children}
        </>
    )
}

export { HtmlMenuItem }
