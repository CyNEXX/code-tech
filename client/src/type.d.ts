/* import { ArticleCategories } from './models/ArticleCategories'; */

interface BasicArticle {
    _id?: string;
    title: string;
    shortDescription: string,
    longDescription?: string,
    category: ArticleCategories;
    createdAt: number;
    views?: number;
    photoUrl: string;
    code?: string;
}

interface ArticleProps {
    article: BasicArticle;
}

interface ArticleListProps {
    items: BasicArticle[]
}

interface CustomizableArticleView {
    category: ArticleCategories
}

interface ComponentToWrapProps {
    childComp?: React.ReactNode;
}

interface FooterProps {
    textData: string[]
}

interface IdentifiableArticle {
    articleID: number;
}

