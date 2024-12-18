import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeBlogPostFields {
    title: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.RichText;
    shortDescription: EntryFieldTypes.Text;
    date: EntryFieldTypes.Date;
    categories: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    author: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    image: EntryFieldTypes.AssetLink;
}

export interface IContentfulAsset {
    sys: { id: string };
    fields: {
        file: {
            url: string;
            details?: string | null;
            fileName?: string;
            contentType?: string;
        };
    };
}

export interface IPost {
    fields: {
        title: string;
        image: {
            fields: {
                file: {
                    url: string;
                };
            };
        };
        categories: string[];
        date: string;
        author: string;
        shortDescription: string;
        slug: string;
    };
}

export type TypeBlogPostSkeleton = EntrySkeletonType<TypeBlogPostFields, "blogPost">;
export type TypeBlogPost<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeBlogPostSkeleton, Modifiers, Locales>;
