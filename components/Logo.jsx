import React from 'react';
import Link from 'next/link'
import clsx from 'clsx';
 const Logo = ({className,props}) => {
    return (
        <Link href="/">
           <h2
           className={clsx("text-3xl font-bold text-gray-600 hover:text-gray-900 duration-300")}
           {...props}
           >Trusted Future</h2>
        </Link>
    )
 }
 export default Logo;