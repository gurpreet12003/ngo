import ProgramCategoryPage from '../../components/ProgramCategoryPage';
import { programCategories } from '../../data/siteData';

export default function SocialEntrepreneurship() {
  const category = programCategories.find((c) => c.slug === 'social-entrepreneurship')
   if (!category) {
    return <div>Category not found.</div>;
  };
  return <ProgramCategoryPage category={category} />;
}
