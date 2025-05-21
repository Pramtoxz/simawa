import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid, Newspaper, Users } from 'lucide-react';
import AppLogo from './app-logo';

// Definisikan tipe untuk auth user
interface PageProps {
  auth: {
    user: {
      id: number;
      name: string;
      role: string;
    };
  };
  [key: string]: unknown;
}

export function AppSidebar() {
  const { auth } = usePage<PageProps>().props;
  const isAdmin = auth.user.role === 'admin';
  const isUkm = auth.user.role === 'ukm';
  
  const mainNavItems: NavItem[] = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: LayoutGrid,
    },
  ];
  
  // Menu Berita untuk admin dan ukm
  if (isAdmin || isUkm) {
    mainNavItems.push({
      title: 'Berita',
      href: '/berita',
      icon: Newspaper,
    });
  }
  
  // Menu Manajemen Anggota hanya untuk ukm
  if (isUkm) {
    mainNavItems.push({
      title: 'Manajemen Anggota',
      href: '/anggota',
      icon: Users,
    });
  }

  const footerNavItems: NavItem[] = [
    {
      title: 'Repository',
      href: 'https://github.com/laravel/react-starter-kit',
      icon: Folder,
    },
    {
      title: 'Documentation',
      href: 'https://laravel.com/docs/starter-kits#react',
      icon: BookOpen,
    },
  ];

  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard" prefetch>
                <AppLogo />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={mainNavItems} />
      </SidebarContent>

      <SidebarFooter>
        <NavFooter items={footerNavItems} className="mt-auto" />
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
