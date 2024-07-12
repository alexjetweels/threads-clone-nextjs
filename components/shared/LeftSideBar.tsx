'use client';

import { sidebarLinks } from '@/constants/index';
import { SignedIn, SignOutButton, useAuth } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import path from 'path';

function LeftSideBar() {
  const router = useRouter();
  const pathName = usePathname();
  const { sessionId } = useAuth();

  // if (!sessionId) return null;

  return (
    <section className='custom-scrollbar leftsidebar'>
      <div className='flex w-full flex-1 flex-col gap-6 px-6'>
        {sidebarLinks.map((link) => {
          const isActive =
            (pathName.includes(link.route) && link.route.length > 1) ||
            pathName === link.route;

          return (
            <Link
              key={link.label}
              href={link.route}
              className={`leftsidebar_link ${isActive && 'bg-primary-500'}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className='text-light-1 max-lg:hidden'>{link.label}</p>
            </Link>
          );
        })}
      </div>

      <div className='mt-10 px-6'>
        <SignedIn>
          <SignOutButton
            redirectUrl='/sign-in'
            signOutOptions={{ sessionId: sessionId ?? '' }}
          >
            <div className='flex gap-4 p-4 cursor-pointer'>
              <Image
                src='/assets/logout.svg'
                alt='logout'
                width={24}
                height={24}
              />
              <p className='text-light-2 max-lg:hidden'>Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
}

export default LeftSideBar;
