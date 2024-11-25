import { Button, Typography, } from 'antd';
import { useTranslation, } from 'react-i18next';
import { useNavigate, } from 'react-router';

import { PAGE_WIDTH, } from '../constants';

export const Header = () => {
    const navigate = useNavigate();

    const { t, } = useTranslation();

    const handleClick = () => navigate('/');

    return (
        <div style={{
            width          : '100%',
            display        : 'flex',
            justifyContent : 'center',
        }}>
            <div style={{
                width      : '100%',
                maxWidth   : PAGE_WIDTH,
                display    : 'flex',
                alignItems : 'center',
            }}>
                <Button
                    size='large'
                    type='text'
                    onClick={handleClick}>
                    <Typography.Title
                        style={{
                            margin : 0,
                        }}
                        level={2}>
                        {t('app.name')}
                    </Typography.Title>
                </Button>
                <span style={{
                    flex : 1,
                }} />
            </div>
        </div>
    );
};
