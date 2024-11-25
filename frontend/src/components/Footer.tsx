import { Button, Space, Typography, } from 'antd';
import type { ReactNode, } from 'react';
import { useTranslation, } from 'react-i18next';
import { useNavigate, } from 'react-router';
import { useMediaQuery, } from 'usehooks-ts';

import { PAGE_WIDTH, } from '../constants';

const Link = ({
    page,
    children,
} : {
    page     : string,
    children : ReactNode,
}) => {
    const navigate = useNavigate();

    const handleClick = () => navigate(`/agreements/${page}`);

    return (
        <Button
            style={{
                color : 'rgba(255, 255, 255, 0.7)',
            }}
            size='small'
            type='text'
            onClick={handleClick}>
            {children}
        </Button>
    );
};

export const Footer = () => {
    const isDesktop = useMediaQuery(`(min-width: ${PAGE_WIDTH + 64}px)`);

    const { t, } = useTranslation();

    return (
        <div style={{
            padding         : 24,
            display         : 'flex',
            flexDirection   : 'row',
            justifyContent  : 'center',
            backgroundColor : '#000000',
        }}>
            <Space
                style={{
                    flexDirection : isDesktop ? 'row' : 'column',
                }}
                size='large'>
                <Typography.Text style={{
                    color : 'rgba(255, 255, 255, 0.7)',
                }}>
                    {t('footer.copyright', {
                        year    : new Date().getFullYear(),
                        appName : t('app.name'),
                    })}
                </Typography.Text>
                <Link page='terms-and-conditions'>{t('footer.terms_and_conditions')}</Link>
                <Link page='privacy-policy'>{t('footer.privacy_policy')}</Link>
                <Link page='acceptable-use-policy'>{t('footer.acceptable_use_policy')}</Link>
                <Link page='disclaimer'>{t('footer.disclaimer')}</Link>
            </Space>
        </div>
    );
};
