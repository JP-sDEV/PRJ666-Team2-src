'use client';
//import { cn } from '../../public/placeholder-logo-unsplash.jpg';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuList } from '@/components/ui/navigation-menu';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import LoginButton from './auth/LoginButton';
import { useSession, signOut } from 'next-auth/react';

const NavBar: React.FC = () => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center min-w-full w-full fixed justify-center p-2 z-[50] mt-[2rem]">
      <div className="flex justify-between md:w-[900px] w-[95%] border dark:border-zinc-900 dark:bg-black bg-opacity-10 relative backdrop-filter backdrop-blur-lg bg-white border-white border-opacity-20 rounded-xl p-2 shadow-lg">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="min-[825px]:hidden p-2 hover:bg-gray-100">
              <MenuIcon className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
                {session ? `Welcome, ${session.user.name}!` : 'Log in to unlock more features!'}
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-3 mt-[1rem] z-[99]">
              <Link href="/">
                <Button className="w-full border hover:bg-gray-100">Home</Button>
              </Link>
              <Link href="/aboutUs">
                <Button className="w-full border hover:bg-gray-100">About Us</Button>
              </Link>
              <Link href="/faq">
                <Button className="w-full border hover:bg-gray-100">FAQ</Button>
              </Link>
              <LoginButton />
              <ModeToggle />
            </div>
          </SheetContent>
        </Sheet>

        <NavigationMenu>
          <NavigationMenuList>
            <Link href="/" className="pl-2">
              <Image src="/logo-unsplash.png" width="40" height="40" alt="Logo" className="h-8" />
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center justify-between flex-1 max-[825px]:hidden ml-8">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Home
            </Link>
            <Link
              href="/aboutUs"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              About Us
            </Link>
            <Link href="/faq" className="text-sm font-medium hover:text-gray-600 transition-colors">
              FAQ
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {session ? (
              <>
                {/* <Link
                  href="/dashboard"
                  className="text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Dashboard
                </Link> */}
                <div className="flex items-center gap-4">
                  <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-500 hover:text-gray-600 transition-all duration-200">
                    {session.user?.name}
                  </span>
                  <button
                    onClick={() => signOut()}
                    className="text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    Sign Out
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Login
                </Link>
                <Link href="/signup">
                  <button className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-full hover:opacity-90 transition-opacity">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

// const ListItem = React.forwardRef<
//     React.ElementRef<"a">,
//     React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//     return (
//         <li>
//             <NavigationMenuLink asChild>
//                 <a
//                     ref={ref}
//                     className={cn(
//                         "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//                         className
//                     )}
//                     {...props}
//                 >
//                     <div className="text-sm font-medium leading-none">{title}</div>
//                     <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//                         {children}
//                     </p>
//                 </a>
//             </NavigationMenuLink>
//         </li>
//     )
// })
// ListItem.displayName = "ListItem"
