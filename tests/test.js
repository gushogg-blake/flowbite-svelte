import { expect, test } from '@playwright/test';

test('index page should have h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1 > span')).toBe('Flowbite Svelte');
});

test('Getting Started page should have h1', async ({ page }) => {
	await page.goto('/getting-started');
	expect(await page.textContent('h1')).toBe('Getting Started');
});

test('About page should have h1', async ({ page }) => {
	await page.goto('/about');
	expect(await page.textContent('h1')).toBe('About Flowbite-Svelte');
});

test('CLI page should have h1', async ({ page }) => {
	await page.goto('/cli');
	expect(await page.textContent('h1')).toBe('Flowbite-Svelte-CLI (fsc)');
});

test('Type list page should have h1', async ({ page }) => {
	await page.goto('/type-list');
	expect(await page.textContent('h1')).toBe('Type list');
});

test('Accordion main page should have h1', async ({ page }) => {
	await page.goto('/accordions');
	expect(await page.textContent('h1')).toBe('Accordion Components');
});

test('Accordion default page should have h1', async ({ page }) => {
	await page.goto('/accordions/default');
	expect(await page.textContent('h1')).toBe('Accordion');
});

test('Icon Accordion page should have h1', async ({ page }) => {
	await page.goto('/accordions/icon-accordion');
	expect(await page.textContent('h1')).toBe('Icon Accordion');
});

test('Alert main page should have h1', async ({ page }) => {
	await page.goto('/alerts');
	expect(await page.textContent('h1')).toBe('Alert Components');
});

test('Alert default page should have h1', async ({ page }) => {
	await page.goto('/alerts/default-alert');
	expect(await page.textContent('h1')).toBe('Alert');
});

test('Border alert page should have h1', async ({ page }) => {
	await page.goto('/alerts/border-alert');
	expect(await page.textContent('h1')).toBe('Border Alert');
});

test('Information alert page should have h1', async ({ page }) => {
	await page.goto('/alerts/information-alert');
	expect(await page.textContent('h1')).toBe('Information Alert');
});

test('Alert animation example page should have h1', async ({ page }) => {
	await page.goto('/alerts/animation');
	expect(await page.textContent('h1')).toBe('Alert Animation Examples');
});

test('Avatar page should have h1', async ({ page }) => {
	await page.goto('/avatar');
	expect(await page.textContent('h1')).toBe('Avatar');
});

test('Badges main page should have h1', async ({ page }) => {
	await page.goto('/badges');
	expect(await page.textContent('h1')).toBe('Badge Components');
});

test('Badge default page should have h1', async ({ page }) => {
	await page.goto('/badges/default');
	expect(await page.textContent('h1')).toBe('Badges');
});

test('Badge with Icon page should have h1', async ({ page }) => {
	await page.goto('/badges/badge-icon');
	expect(await page.textContent('h1')).toBe('Badges with Icon');
});

test('Badge with Link page should have h1', async ({ page }) => {
	await page.goto('/badges/badge-link');
	expect(await page.textContent('h1')).toBe('Badges with Link');
});

test('Button Group main page should have h1', async ({ page }) => {
	await page.goto('/button-groups');
	expect(await page.textContent('h1')).toBe('Button-group Components');
});

test('Button Group default page should have h1', async ({ page }) => {
	await page.goto('/button-groups/default');
	expect(await page.textContent('h1')).toBe('Button Group');
});

test('Button Group outline page should have h1', async ({ page }) => {
	await page.goto('/button-groups/outline');
	expect(await page.textContent('h1')).toBe('Outline Button Group');
});

test('Buttons main page should have h1', async ({ page }) => {
	await page.goto('/buttons');
	expect(await page.textContent('h1')).toBe('Button Components');
});

test('Buttons default page should have h1', async ({ page }) => {
	await page.goto('/buttons/default');
	expect(await page.textContent('h1')).toBe('Buttons');
});

test('Button Component Set Up page should have h1', async ({ page }) => {
	await page.goto('/buttons/setup');
	expect(await page.textContent('h1')).toBe('Button Component Set Up');
});

test('Colored Shadow Buttons page should have h1', async ({ page }) => {
	await page.goto('/buttons/colored-shadow');
	expect(await page.textContent('h1')).toBe('Colored Shadow Buttons');
});

test('Gradient Duotone Buttons page should have h1', async ({ page }) => {
	await page.goto('/buttons/gradient-duotone');
	expect(await page.textContent('h1')).toBe('Gradient Duotone Buttons');
});

test('Gradient Monochrome Buttons page should have h1', async ({ page }) => {
	await page.goto('/buttons/gradient-monochrome');
	expect(await page.textContent('h1')).toBe('Gradient Monochrome Buttons');
});

test('Gradient Outline Buttons page should have h1', async ({ page }) => {
	await page.goto('/buttons/gradient-outline');
	expect(await page.textContent('h1')).toBe('Gradient Outline Buttons');
});

test('Outlined Buttons page should have h1', async ({ page }) => {
	await page.goto('/buttons/outlined');
	expect(await page.textContent('h1')).toBe('Outlined Buttons');
});

test('Rounded Buttons page should have h1', async ({ page }) => {
	await page.goto('/buttons/rounded');
	expect(await page.textContent('h1')).toBe('Rounded Buttons');
});

test('Card main page should have h1', async ({ page }) => {
	await page.goto('/cards');
	expect(await page.textContent('h1')).toBe('Card Components');
});

test('Card page should have h1', async ({ page }) => {
	await page.goto('/cards/card');
	expect(await page.textContent('h1')).toBe('Card');
});

test('CTA Card page should have h1', async ({ page }) => {
	await page.goto('/cards/cta');
	expect(await page.textContent('h1')).toBe('CTA Card');
});

test('Ecommerce Card page should have h1', async ({ page }) => {
	await page.goto('/cards/ecommerce');
	expect(await page.textContent('h1')).toBe('Ecommerce Card');
});

test('Horizontal Card page should have h1', async ({ page }) => {
	await page.goto('/cards/horizontal');
	expect(await page.textContent('h1')).toBe('Horizontal Card');
});

test('Interactive Card page should have h1', async ({ page }) => {
	await page.goto('/cards/interactive');
	expect(await page.textContent('h1')).toBe('Interactive Card');
});

test('Card with list page should have h1', async ({ page }) => {
	await page.goto('/cards/list');
	expect(await page.textContent('h1')).toBe('Card with List');
});

test('Sign In Card page should have h1', async ({ page }) => {
	await page.goto('/cards/signin');
	expect(await page.textContent('h1')).toBe('Sign In Card');
});

test('Dark mode page should have h1', async ({ page }) => {
	await page.goto('/darkmode');
	expect(await page.textContent('h1')).toBe('Dark mode');
});

test('Dropdown page should have h1', async ({ page }) => {
	await page.goto('/dropdowns');
	expect(await page.textContent('h1')).toBe('Dropdown');
});

test('Footer main page should have h1', async ({ page }) => {
	await page.goto('/footer');
	expect(await page.textContent('h1')).toBe('Footer Components');
});

test('Footer default page should have h1', async ({ page }) => {
	await page.goto('/footer/default');
	expect(await page.textContent('h1')).toBe('Simple Footer');
});

test('Footer with Logo page should have h1', async ({ page }) => {
	await page.goto('/footer/logo');
	expect(await page.textContent('h1')).toBe('Footer with Logo');
});

test('Sitemap Footer page should have h1', async ({ page }) => {
	await page.goto('/footer/sitemap');
	expect(await page.textContent('h1')).toBe('Sitemap Footer');
});

test('Socialmeida Footer page should have h1', async ({ page }) => {
	await page.goto('/footer/socialmedia');
	expect(await page.textContent('h1')).toBe('Socialmedia Footer');
});

test('Form page should have h1', async ({ page }) => {
	await page.goto('/forms');
	expect(await page.textContent('h1')).toBe('Form Components');
});

test('Icon main page should have h1', async ({ page }) => {
	await page.goto('/icons');
	expect(await page.textContent('h1')).toBe('Icon Components');
});

test('HeroIcon page should have h1', async ({ page }) => {
	await page.goto('/icons/heroicons');
	expect(await page.textContent('h1')).toBe('HeroIcons');
});

test('Simple-icon page should have h1', async ({ page }) => {
	await page.goto('/icons/simple-icons');
	expect(await page.textContent('h1')).toBe('Simple-icons');
});

test('List group page should have h1', async ({ page }) => {
	await page.goto('/list-group');
	expect(await page.textContent('h1')).toBe('List group');
});

test('Modal main page should have h1', async ({ page }) => {
	await page.goto('/modals');
	expect(await page.textContent('h1')).toBe('Modal Components');
});

test('All Modals page should have h1', async ({ page }) => {
	await page.goto('/modals/all-modals');
	expect(await page.textContent('h1')).toBe('All Modals');
});

test('Small Modals page should have h1', async ({ page }) => {
	await page.goto('/modals/small');
	expect(await page.textContent('h1')).toBe('Small Modals');
});

test('Medium Modals page should have h1', async ({ page }) => {
	await page.goto('/modals/medium');
	expect(await page.textContent('h1')).toBe('Medium Modals');
});

test('Large Modals page should have h1', async ({ page }) => {
	await page.goto('/modals/large');
	expect(await page.textContent('h1')).toBe('Large Modals');
});

test('Extra-large Modals page should have h1', async ({ page }) => {
	await page.goto('/modals/extra-large');
	expect(await page.textContent('h1')).toBe('Extra-large Modals');
});

test('Sign-in Modals page should have h1', async ({ page }) => {
	await page.goto('/modals/signin');
	expect(await page.textContent('h1')).toBe('Sign-in Modals');
});

test('Navbar main page should have h1', async ({ page }) => {
	await page.goto('/navbars');
	expect(await page.textContent('h1')).toBe('Navbar Components');
});

test('Navbar Default page should have h1', async ({ page }) => {
	await page.goto('/navbars/default');
	expect(await page.textContent('h1')).toBe('Navbar Default');
});

test('Dropdown Navbar page should have h1', async ({ page }) => {
	await page.goto('/navbars/dropdown');
	expect(await page.textContent('h1')).toBe('Dropdown Navbar');
});

test('Pagination page should have h1', async ({ page }) => {
	await page.goto('/paginations');
	expect(await page.textContent('h1')).toBe('Pagination Components');
});

test('Progress bar page should have h1', async ({ page }) => {
	await page.goto('/progressbars');
	expect(await page.textContent('h1')).toBe('Progress bar Components');
});

test('Sidebar page should have h1', async ({ page }) => {
	await page.goto('/sidebars');
	expect(await page.textContent('h1')).toBe('Sidebar Components');
});

test('Spinner main page should have h1', async ({ page }) => {
	await page.goto('/spinners');
	expect(await page.textContent('h1')).toBe('Spinner Components');
});

test('Spinner default page should have h1', async ({ page }) => {
	await page.goto('/spinners/default');
	expect(await page.textContent('h1')).toBe('Spinner');
});

test('Button Spinner page should have h1', async ({ page }) => {
	await page.goto('/spinners/button-spinner');
	expect(await page.textContent('h1')).toBe('Button Spinner');
});

test('Table page should have h1', async ({ page }) => {
	await page.goto('/tables');
	expect(await page.textContent('h1')).toBe('Table Components');
});

test('Tab main page should have h1', async ({ page }) => {
	await page.goto('/tabs');
	expect(await page.textContent('h1')).toBe('Tab Components');
});

test('Default Tab page should have h1', async ({ page }) => {
	await page.goto('/tabs/default-tabs');
	expect(await page.textContent('h1')).toBe('Default Tabs');
});

test('Underline Tabs page should have h1', async ({ page }) => {
	await page.goto('/tabs/underline-tabs');
	expect(await page.textContent('h1')).toBe('Underline Tabs');
});

test('Icon Tabs page should have h1', async ({ page }) => {
	await page.goto('/tabs/icon-tabs');
	expect(await page.textContent('h1')).toBe('Icon Tabs');
});

test('Full Width Tabs page should have h1', async ({ page }) => {
	await page.goto('/tabs/full-width-tabs');
	expect(await page.textContent('h1')).toBe('Full Width Tabs');
});

test('Interactive Tabs page should have h1', async ({ page }) => {
	await page.goto('/tabs/interactive-tabs');
	expect(await page.textContent('h1')).toBe('Interactive Tabs');
});

test('Interactive Tabs 2: Adding other components page should have h1', async ({ page }) => {
	await page.goto('/tabs/interactive-tabs-2');
	expect(await page.textContent('h1')).toBe('Interactive Tabs 2: Adding other components');
});

test('Multiple Interactive Tabs page should have h1', async ({ page }) => {
	await page.goto('/tabs/multiple-interactive-tabs');
	expect(await page.textContent('h1')).toBe('Multiple Interactive Tabs');
});

test('Pill Tabs page should have h1', async ({ page }) => {
	await page.goto('/tabs/pilltabs');
	expect(await page.textContent('h1')).toBe('Pill Tabs');
});

test('Timeline main page should have h1', async ({ page }) => {
	await page.goto('/timelines');
	expect(await page.textContent('h1')).toBe('Timeline Components');
});

test('Default Timeline page should have h1', async ({ page }) => {
	await page.goto('/timelines/default');
	expect(await page.textContent('h1')).toBe('Default Timeline');
});

test('Vertical Timeline page should have h1', async ({ page }) => {
	await page.goto('/timelines/vertical');
	expect(await page.textContent('h1')).toBe('Vertical Timeline');
});

test('Horizontal Timeline page should have h1', async ({ page }) => {
	await page.goto('/timelines/horizontal');
	expect(await page.textContent('h1')).toBe('Horizontal Timeline');
});

test('Activity Log page should have h1', async ({ page }) => {
	await page.goto('/timelines/activity');
	expect(await page.textContent('h1')).toBe('Activity Log');
});

test('Grouped Timeline page should have h1', async ({ page }) => {
	await page.goto('/timelines/group');
	expect(await page.textContent('h1')).toBe('Grouped Timeline');
});

test('Toast Components page should have h1', async ({ page }) => {
	await page.goto('/toasts');
	expect(await page.textContent('h1')).toBe('Toast Components');
});

test('Tooltip Components main page should have h1', async ({ page }) => {
	await page.goto('/tooltips');
	expect(await page.textContent('h1')).toBe('Tooltip Components');
});

test('Default Tooltip page should have h1', async ({ page }) => {
	await page.goto('/tooltips/default');
	expect(await page.textContent('h1')).toBe('Default Tooltip');
});

test('Light Tooltip page should have h1', async ({ page }) => {
	await page.goto('/tooltips/light');
	expect(await page.textContent('h1')).toBe('Light Tooltip');
});