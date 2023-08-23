import React from 'react';
import logoBbc from '@/public/Images/logos/bbc.svg';
import logoCbs from '@/public/Images/logos/cbs.svg';
import logoCnn from '@/public/Images/logos/cnn.svg';
import logoFastCompany from '@/public/Images/logos/fast-company.svg';
import logoForbes from '@/public/Images/logos/forbes.svg';
import logoHuffpost from '@/public/Images/logos/huffpost.svg';
import logoWired from '@/public/Images/logos/wired.svg';
import logoTechCrunch from '@/public/Images/logos/techcrunch.svg';
import Image from 'next/image';
const ExtraLogos = ()=> {
    const logos = [
        {id:2001,title: 'Forbes', logo: logoForbes},
        {id:2002,title: 'TechCrunch', logo: logoTechCrunch},
        {id:2003,title: 'BBC', logo: logoBbc},
        {id:2004,title: 'CNN', logo: logoCnn},
        {id:2005,title: 'CBS', logo: logoCbs},
        {id:2006,title: 'Fast Company', logo: logoFastCompany},
        {id:2007,title: 'Huff Post', logo: logoHuffpost},
        {id:2008,title: 'Wired', logo: logoWired},
    ]
    return(
        <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
           <p className="text-center text-sm font-semibold text-gray-900 lg:text-left">As Featured In</p>
           <ul role="list" className="mx-auto mt-8 flex max-w-screen-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start"> {
            logos.map(({title,id,logo})=> (
                <li key={id}>
                    <Image src={logo} alt={title} className='h-8' unoptimized/>
                </li>
            ))}
            </ul>
        </div>
    )
}
export default ExtraLogos