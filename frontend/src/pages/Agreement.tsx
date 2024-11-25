import { documentToHtmlString, } from '@contentful/rich-text-html-renderer';
import { Typography, } from 'antd';
import { createClient, } from 'contentful';
import { useEffect, useState, } from 'react';
import { useTranslation, } from 'react-i18next';
import { useLocation, useParams, } from 'react-router';

import { PAGE_WIDTH, } from '../constants';
import { AgreementSkeleton, } from '../models';

const ENTRY_IDS : Record<string, string> = {
    'terms-and-conditions'  : '',
    'privacy-policy'        : '',
    'acceptable-use-policy' : '',
    'disclaimer'            : '',
};

export const Agreement = () => {
    const [ title,       setTitle,       ] = useState<string | undefined>();
    const [ lastUpdated, setLastUpdated, ] = useState<string | undefined>();
    const [ content,     setContent,     ] = useState<string | undefined>();

    const { page, } = useParams();

    const { pathname, } = useLocation();

    const { t, } = useTranslation();

    const client = createClient({
        space       : import.meta.env.VITE_APP_CONTENTFUL_SPACE_ID,
        accessToken : import.meta.env.VITE_APP_CONTENTFUL_API_KEY,
    });

    useEffect(() => {
        if (client && page) client.getEntry<AgreementSkeleton>(ENTRY_IDS[page])
            .then((entry) => {
                setTitle(entry.fields.name);
                setLastUpdated(entry.fields.lastUpdated);
                setContent(documentToHtmlString(entry.fields.content));
            })
            .catch(console.error);
    }, [ client, page, ]);

    useEffect(() => window.scrollTo({
        top      : 0,
        behavior : 'smooth',
    }), [ pathname, ]);

    return (
        <section style={{
            width          : '100%',
            display        : 'flex',
            flexDirection  : 'column',
            alignItems     : 'center',
            justifyContent : 'center',
        }}>
            <div style={{
                maxWidth      : PAGE_WIDTH,
                paddingLeft   : 8,
                paddingRight  : 8,
                paddingTop    : 48,
                paddingBottom : 48,
                display       : 'flex',
                flexDirection : 'column',
            }}>
                {title ? (
                    <Typography.Title
                        style={{
                            fontWeight : 'bold',
                        }}
                        level={1}>
                        {title}
                    </Typography.Title>
                ) : null}
                {lastUpdated ? (
                    <Typography.Text style={{
                        fontWeight : 600,
                    }}>
                        {t('label.agreement.lastUpdated', {
                            date : lastUpdated,
                        })}
                    </Typography.Text>
                ) : null}
                <div
                    style={{
                        marginTop    : 24,
                        marginBottom : 24,
                    }}
                    dangerouslySetInnerHTML={{
                        __html : content ?? '',
                    }} />
            </div>
        </section>
    );
};
