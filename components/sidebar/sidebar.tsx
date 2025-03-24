import contactUs from '@/images/sidebar/contact-us.svg';
import privacyPolicy from '@/images/sidebar/privacy-policy.svg';
import termsAndConditions from '@/images/sidebar/terms-and-conditions.svg';

import { BaseSidebar } from './base-sidebar';
import { CategoryItem, PrivacyPageItem } from './sidebar-items';

const categories = [
    'Wins',
    'Operators',
    'Game Providers',
    'Game Types',
    'Features',
    'Themes',
    'Volatility',
    'RTP',
];

const privacyPages = [
    {
        name: 'Terms and Conditions',
        icon: termsAndConditions,
    },
    {
        name: 'Privacy Policy',
        icon: privacyPolicy,
    },
    {
        name: 'Contact Us',
        icon: contactUs,
    },
];

interface SidebarProps {
    isVisible?: boolean;
    type?: 'categories' | 'privacyPages';
}

export function Sidebar({
    isVisible = true,
    type = 'categories',
}: SidebarProps) {
    if (!isVisible) {
        return null;
    }

    return (
        <BaseSidebar isVisible={isVisible}>
            {type === 'categories'
                ? categories.map((name) => (
                      <CategoryItem key={name} name={name} />
                  ))
                : privacyPages.map((page) => (
                      <PrivacyPageItem
                          key={page.name}
                          name={page.name}
                          icon={page.icon}
                      />
                  ))}
        </BaseSidebar>
    );
}
