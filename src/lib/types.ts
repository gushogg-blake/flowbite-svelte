import type { SvelteComponent } from 'svelte';

export type Colors = 'blue' | 'gray' | 'red' | 'yellow' | 'purple' | 'green' | 'indigo' | 'pink';

export type DropdownColorType = 'blue' | 'blue-outline' | 'dark' | 'dark-outline' | 'light' | 'green' | 'green-outline' | 'red' | 'red-outline' | 'yellow' | 'yellow-outline' | 'purple' | 'purple-outline';

export type Buttontypes = 'blue' | 'blue-outline' | 'dark' | 'dark-outline' | 'light' | 'green' | 'green-outline' | 'red' | 'red-outline' | 'yellow' | 'yellow-outline' | 'purple' | 'purple-outline';

export type Buttonshadows = 'blue' | 'green' | 'cyan' | 'teal' | 'lime' | 'red' | 'pink' | 'purple';

export type Gradientduotones = 'purple2blue' | 'cyan2blue' | 'green2blue' | 'purple2pink' | 'pink2orange' | 'teal2lime' | 'red2yellow'

export type Textsize = 'text-xs' | 'text-sm' | 'text-base' | 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl' | 'text-4xl'


export type InputType = 'button'| 'checkbox'| 'color'| 'date'| 'datetime-local'| 'email'| 'file'| 'hidden'| 'image'| 'month'| 'number'| 'password'| 'radio'| 'range'| 'reset'| 'search'| 'submit'| 'tel'| 'text'| 'time'| 'url' | 'week';

export interface ButtonGroupType {
    name: string;
    href?: string;
    rel?: string;
    icon?: typeof SvelteComponent;
}

export type CardButtonType = {
    textSize?: Textsize;
    name: string;
    type?: Buttontypes;
    href?: string;
    rel?: string;
    rounded?: boolean;
};

export type ImgType = {
    src: string;
    alt?: string;
}

export interface LinkType {
    name: string;
    href: string;
    rel?: string;
}

export interface SiteType {
    name: string;
    href: string;
    img?: string;
}

export interface SocialMediaType {
    href: string;
    icon: typeof SvelteComponent;
}

export type AlignType = 'text-center' | 'text-left' | 'text-right'

export interface TabType {
    name: string;
    active: boolean;
    href: string,
    rel?: string,
}

export interface IconTabType {
    name: string;
    active: boolean;
    href: string,
    rel?: string,
    icon?: typeof SvelteComponent;
}

export interface InteractiveTabType {
    name: string;
    id: number;
    content: string | typeof SvelteComponent;
}

export interface TabHeadType {
    name: string;
    id: number;
}

export interface PillTabType {
    name: string;
    selected: boolean;
    href: string;
}

export interface NavbarType {
    name: string;
    href: string;
    rel?: string;
    child?: NavbarType[];
}

export interface SocialMediaLinkType {
    parent: string;
	children?: LinkType[]
}

export interface DropdownType {
    name: string;
    href: string;
    divider: boolean;
}

export interface ListCardType {
    img: ImgType;
    field1: string;
    field2?: string;
    field3?: string;
}

export type AuthFunctionType = () => Promise<void>;

export type ButtonType = 'button' | 'submit' | 'reset'

export interface AuthFieldType {
    label: string;
    fieldtype: string;
    required?: boolean;
    placeholder?: string;
}

export type SidebarType = {
    id: number;
    name: string;
    href?: string;
    icon?: typeof SvelteComponent;
    rel?: string;
    children?: SidebarType[];
    subtext?: HTMLElement;
}

export type SidebarCtaType = {
    label: string;
    text: HTMLElement;
}

// export type SelectType = {
//     id: string;
//     name: string;
//     label: string;
// }

export type SelectOptionType = {
    name: string;
    value: string;
}

export interface AvatarType {
    src?: string;
    alt?: string;
    size?:  6 | 8 | 12 | 16 | 24 | 48;
    border?: boolean;
    round?: boolean;
    header?: string;
    text?: string;
}

export type TransitionTypes = 'fade' | 'fly' | 'slide' | 'blur'

export interface TimelineItemType {
    date: Date | string;
    title: string;
    icon?: typeof SvelteComponent;
    href?: string;
    linkname?: string;
    text?: HTMLElement | string;
}

export interface TimelineItemVerticalType {
    date: Date | string;
    title: string;
    icon?: typeof SvelteComponent;
    href?: string;
    linkname?: string;
    text?: HTMLElement | string;
}

export interface TimelineItemHorizontalType {
    date: Date | string;
    title: string;
    icon?: typeof SvelteComponent;
    text?: HTMLElement | string;
}

export interface ActivityType {
    title: HTMLElement | string ;
    date: Date | string;
    src: string;
    alt: string;
    text?: HTMLElement | string;
}

export interface GroupTimelineType {
    title: string | HTMLElement;
    src: string;
    alt: string;
    href?: string;
    isPrivate?: boolean;
    comment?: string | HTMLElement;
}

export interface PageType {
    pageNum: number;
    href: string;
}

export interface TransitionParamTypes{
        delay?: number,
        duration?: number,
        easing?: (t: number) => number,
        css?: (t: number, u: number) => string,
        tick?: (t: number, u: number) => void
}

export interface CheckboxType {
    id: string;
    label: string;
    checked?: boolean;
    disabled?: boolean;
    helper?: string
}

export interface RadioType {
    id: string;
    label: string;
    value: string;
    checked?: boolean;
    disabled?: boolean;
}
