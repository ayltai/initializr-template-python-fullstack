import { EntryFieldTypes, } from 'contentful';

export type AgreementSkeleton = {
    contentTypeId : 'agreement',
    fields        : {
        name        : EntryFieldTypes.Symbol,
        lastUpdated : EntryFieldTypes.Date,
        content     : EntryFieldTypes.RichText,
    },
};
