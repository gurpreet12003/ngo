import ProgramCategoryPage from '../../components/ProgramCategoryPage';
import { programCategories } from '../../data/siteData';

export default function SocialAwareness() {
  const category = programCategories.find((c) => c.slug === 'social-awareness')
   if (!category) {
    return <div>Category not found.</div>;
  }
  return <ProgramCategoryPage category={category} />;
}
