<script lang="ts">
  import '../app.css';
  import { DarkMode, Badge, SitemapFooter } from '$lib/index';
  import { Aside, Nav, SidebarList, Navbar, TopMenu } from '@codewithshin/svelte-sidebar';
  import { GithubIcon, TwitterIcon } from '@codewithshin/svelte-simpleicons';
  import { accordions, alerts, badges, buttons, buttonGroups, cards, footers, icons, modals, navbar, spinners, svelteflows, tabs, timelines, tooltips, topMenus } from './items';
  let site = {
    name: 'Flowbite Svelte',
    href: '/',
    img: '/images/flowbite-svelte-logo-40.png'
  };
  // Navbar
  let logo = '/images/flowbite-svelte-logo-30.png';
  let alt = 'Flowbite Svelte';
  let activeChildLi = 'block py-2 px-4 text-lg text-gray-700 hover:bg-gray-100 dark:text-white';
  let childLi = 'block py-2 pr-4 pl-3  text-gray-700 border-b border-gray-100 md:border-0 md:p-0 text-lg dark:text-white';
  let headerClass = 'fixed w-full z-50 px-6 bg-white h-16 pt-3 text-gray-600 border-b-2 bg-white dark:bg-gray-800 dark:text-white dark:border-b-1';
  let siteName = 'Flowbite Svelte';
  let navClass = 'py-0 px-8 bg-white text-lg bg-white dark:bg-gray-800 dark:text-white';
  let navDivClass = 'pb-4';
  let navDivClasslast = 'pb-24';
  let siteClass = ' pt-1.5 pl-12 w-full';

  let topli = 'block py-2 pr-4 pl-3 text-gray-700 md:border-0 md:p-0 dark:text-gray-300  dark:hover:bg-gray-700 text-lg z-50  dark:bg-gray-800 dark:border-0 hover:bg-gray-100 bg-white';
  let topMenuDiv = 'container flex flex-wrap justify-end items-center mx-auto dark:bg-gray-800 h-8';
  let topul = 'flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium pt-1 dark:bg-gray-800 bg-white';
  // Others
  let asideClass = 'fixed w-auto top-16 bg-white pt-8 shadow-lg z-50 px-4 h-screen z-50 overflow-scroll bg-white dark:bg-gray-800';
  let darkmodebtn = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5 fixed left-2 top-20 z-50';
  let sideBarListClass = 'border-b border-gray-400 dark:border-gray-500 mb-2 px-4 text-base';
  // activeDropdownDiv, activeChildLi, buttonClass, dropdownLi

  let socialMedia = [
    {
      href: 'https://github.com/shinokada',
      icon: GithubIcon
    },
    {
      href: 'https://twitter.com/shinokada',
      icon: TwitterIcon
    }
  ];
  let links = [
    {
      parent: '',
      children: [
        { name: 'Accordion', href: '/accordions/' },
        { name: 'Alert', href: '/alerts' },
        { name: 'Avatar', href: '/avatar' },
        { name: 'Badge', href: '/badges' },
        { name: 'Button', href: '/buttons' }
      ]
    },
    {
      parent: '',
      children: [
        { name: 'Button Group', href: '/button-groups' },
        { name: 'Card', href: '/cards' },
        { name: 'Dark', href: '/darkmode' },
        { name: 'Dropdown', href: '/dropdowns' },
        { name: 'Footer', href: '/footer' }
      ]
    },
    {
      parent: '',
      children: [
        { name: 'Form', href: '/forms' },
        { name: 'Icon', href: '/icons' },
        { name: 'List group', href: '/list-group' },
        { name: 'Modal', href: '/modals' },
        { name: 'Navbar', href: '/navbars' }
      ]
    },
    {
      parent: '',
      children: [
        { name: 'Pagination', href: '/paginations' },
        { name: 'Progress bar', href: '/progressbars' },
        { name: 'Sidebar', href: '/sidebars' },
        { name: 'Spinner', href: '/spinners' },
        { name: 'Tables', href: '/tables' }
      ]
    },
    {
      parent: '',
      children: [
        { name: 'Tab', href: '/tabs' },
        { name: 'Timeline', href: '/timelines' },
        { name: 'Toast', href: '/toasts' },
        { name: 'Tooltip', href: '/tooltips' }
      ]
    },
    {
      parent: '',
      children: [
        { name: 'Getting Started', href: '/getting-started' },
        {
          name: 'About',
          href: '/about'
        },
        {
          name: 'Type list',
          href: '/type-list'
        },
        {
          name: 'CLI',
          href: '/cli'
        }
      ]
    },
    {
      parent: 'RESOURCES',
      children: [
        {
          name: 'Flowbite',
          href: 'https://flowbite.com/docs/getting-started/introduction/'
        },
        {
          name: 'Tailwind CSS',
          href: 'https://tailwindcss.com/docs/installation'
        }
      ]
    },
    {
      parent: 'FOLLOW US',
      children: [
        { name: 'Github', href: 'https://github.com/shinokada' },
        {
          name: 'Twitter',
          href: 'https://twitter.com/shinokada'
        }
      ]
    },
    {
      parent: 'LEGAL',
      children: [{ name: 'License', href: 'license' }]
    }
  ];
  let allRightsReserved = '';
  let copyrightYear = '';
</script>

<Navbar {headerClass} {siteClass} {siteName} {logo} {alt}>
  <TopMenu {topMenus} {topMenuDiv} {topul} {topli} {activeChildLi} {childLi} />
</Navbar>

<Aside {asideClass}>
  <Nav {navClass} {navDivClass}>
    <h3 class="text-base pb-4">
      <a href="/">Flowbite Svelte</a>
    </h3>
    {#each svelteflows as { href, name, rel }}
      <SidebarList {href} {name} {rel} {sideBarListClass} />
    {/each}
  </Nav>
  <Nav {navClass} {navDivClass}>
    <h3 class="text-base pb-4">
      <a href="/accordions">Accordions</a>
    </h3>
    {#each accordions as { href, name, rel }}
      <SidebarList {href} {name} {rel} {sideBarListClass} />
    {/each}
  </Nav>
  <Nav {navClass} {navDivClass}>
    <h3 class="text-base pb-4"><a href="/alerts">Alerts</a></h3>
    {#each alerts as { href, name, rel }}
      <SidebarList {href} {name} {rel} {sideBarListClass} />
    {/each}
  </Nav>
  <Nav {navClass} {navDivClass}>
    <h3 class="text-base pb-4">
      <a href="/avatar">Avatar <Badge name="NEW" /></a>
    </h3>
  </Nav>
  <Nav {navClass} {navDivClass}>
    <h3 class="text-base pb-4">
      <a href="/badges">Badges</a>
    </h3>
    {#each badges as { href, name, rel }}
      <SidebarList {href} {name} {rel} {sideBarListClass} />
    {/each}
  </Nav>
  <Nav {navClass} {navDivClass}>
    <h3 class="text-base pb-4">
      <a href="/button-groups">Button groups</a>
    </h3>
    {#each buttonGroups as { href, name, rel }}
      <SidebarList {href} {name} {rel} {sideBarListClass} />
    {/each}
  </Nav>
  <Nav {navClass} {navDivClass}>
    <h3 class="text-base pb-4">
      <a href="/buttons">Buttons</a>
    </h3>
    {#each buttons as { href, name, rel }}
      <SidebarList {href} {name} {rel} {sideBarListClass} />
    {/each}
  </Nav>
  <Nav {navClass} {navDivClass}>
    <h3 class="text-base pb-4"><a href="/cards">Cards</a></h3>
    {#each cards as { href, name, rel }}
      <SidebarList {href} {name} {rel} {sideBarListClass} />
    {/each}
  </Nav>
  <Nav {navClass} {navDivClass}>
    <h3 class="text-base pb-4">
      <a href="/darkmode">Dark mode</a>
    </h3>
  </Nav>
  <Nav {navClass} {navDivClass}>
    <h3 class="text-base pb-4">
      <a href="/dropdowns">Dropdowns</a>
    </h3>
  </Nav>
  <Nav {navClass} {navDivClass}>
    <h3 class="text-base pb-4">
      <a href="/footer">Footer</a>
    </h3>
    {#each footers as { href, name, rel }}
      <SidebarList {href} {name} {rel} {sideBarListClass} />
    {/each}
  </Nav>
  <Nav {navClass} {navDivClass}>
    <h3 class="text-base pb-4">
      <a href="/forms">Forms <Badge name="NEW" /></a>
    </h3>
  </Nav>
  <Nav {navClass} {navDivClass}>
    <h3 class="text-base pb-4">
      <a href="/icons">Icons</a>
    </h3>
    {#each icons as { href, name, rel }}
      <SidebarList {href} {name} {rel} {sideBarListClass} />
    {/each}
  </Nav>
  <Nav {navClass} {navDivClass}>
    <h3 class="text-base pb-4">
      <a href="/list-group">List group</a>
    </h3>
  </Nav>
  <Nav {navClass} {navDivClass}>
    <h3 class="text-base pb-4"><a href="/modals">Modals</a></h3>
    {#each modals as { href, name, rel }}
      <SidebarList {href} {name} {rel} {sideBarListClass} />
    {/each}
  </Nav>
  <Nav {navClass} {navDivClass}>
    <h3 class="text-base pb-4"><a href="/navbars">Navbar</a></h3>
    {#each navbar as { href, name, rel }}
      <SidebarList {href} {name} {rel} {sideBarListClass} />
    {/each}
  </Nav>
  <Nav {navClass} {navDivClass}>
    <h3 class="text-base pb-4">
      <a href="/paginations">Pagination <Badge name="NEW" /></a>
    </h3>
  </Nav>
  <Nav {navClass} {navDivClass}>
    <h3 class="text-base pb-4">
      <a href="/progressbars">Progress bar <Badge name="NEW" /></a>
    </h3>
  </Nav>
  <Nav {navClass} {navDivClass}>
    <h3 class="text-base pb-4">
      <a href="/sidebars">Sidebar</a>
    </h3>
  </Nav>
  <Nav {navClass} {navDivClass}>
    <h3 class="text-base pb-4">
      <a href="/spinners">Spinners</a>
    </h3>
    {#each spinners as { href, name, rel }}
      <SidebarList {href} {name} {rel} {sideBarListClass} />
    {/each}
  </Nav>
  <Nav {navClass} {navDivClass}>
    <h3 class="text-base pb-4">
      <a href="/tables">Tables <Badge name="NEW" /></a>
    </h3>
  </Nav>
  <Nav {navClass} {navDivClass}>
    <h3 class="text-base pb-4"><a href="/tabs">Tabs</a></h3>
    {#each tabs as { href, name, rel }}
      <SidebarList {href} {name} {rel} {sideBarListClass} />
    {/each}
  </Nav>
  <Nav {navClass} {navDivClass}>
    <h3 class="text-base pb-4">
      <a href="/timelines">Timelines <Badge name="NEW" /></a>
    </h3>
    {#each timelines as { href, name, rel }}
      <SidebarList {href} {name} {rel} {sideBarListClass} />
    {/each}
  </Nav>
  <Nav {navClass} {navDivClass}>
    <h3 class="text-base pb-4"><a href="/toasts">Toast <Badge name="NEW" /></a></h3>
  </Nav>
  <Nav {navClass} navDivClass={navDivClasslast}>
    <h3 class="text-base pb-4">
      <a href="/tooltips">Tooltips</a>
    </h3>
    {#each tooltips as { href, name, rel }}
      <SidebarList {href} {name} {rel} {sideBarListClass} />
    {/each}
  </Nav>
</Aside>

<main class="container mx-auto px-4 pt-4">
  <DarkMode btnClass={darkmodebtn} />
  <div class="mt-4 w-full">
    <slot />
  </div>
  <div class="pt-4 ">
    <SitemapFooter {site} {socialMedia} {links} {allRightsReserved} {copyrightYear} />
  </div>
</main>
