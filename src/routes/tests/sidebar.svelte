<script>
  import { Sidebar } from '$lib/index';
  import { ChartPieIconSolid, ShoppingBagIconSolid, TableIconSolid, InboxInIconSolid, UserIconSolid, LoginIconSolid, CogIconSolid } from '@codewithshin/svelte-heroicons';
  let site = {
    name: 'Flowbite-Svelte',
    href: '/',
    img: '/images/mkdir-logo.webp'
  };
  let uid = 1;
  let links = [
    {
      id: uid++,
      name: 'Dashboard',
      href: '/',
      icon: ChartPieIconSolid
    },
    {
      id: uid++,
      name: 'E-commerce',
      icon: ShoppingBagIconSolid,
      children: [
        {
          id: uid++,
          name: 'Product',
          href: '/'
        },
        {
          id: uid++,
          name: 'Billing',
          href: '/'
        },
        {
          id: uid++,
          name: 'Invoice',
          href: '/'
        }
      ]
    },
    {
      id: uid++,
      name: 'Kanban',
      icon: TableIconSolid,
      href: '/'
    },
    {
      id: uid++,
      name: 'Inbox',
      icon: InboxInIconSolid,
      href: '/'
    },
    {
      id: uid++,
      name: 'Users',
      icon: UserIconSolid,
      children: [
        {
          id: uid++,
          name: 'Sign In',
          href: '/'
        },
        {
          id: uid++,
          name: 'Sign Out',
          href: '/'
        },
        {
          id: uid++,
          name: 'Profile',
          href: '/'
        }
      ]
    },
    {
      id: uid++,
      name: 'Sign In',
      icon: LoginIconSolid,
      href: '/'
    },
    {
      id: uid++,
      name: 'Setting',
      icon: CogIconSolid,
      href: '/'
    }
  ];
</script>

<h1 class="text-3xl w-full dark:text-white pt-16">Sidebar</h1>

<h2 class="text-2xl mt-8 dark:text-white py-8">Example</h2>

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Sidebar {links} {site} />
</div>
