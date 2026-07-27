import ProgramCategoryPage from '../../components/ProgramCategoryPage';
import { programCategories } from '../../data/siteData';

export default function YouthLeadership() {
  const category = programCategories.find((c) => c.slug === 'youth-leadership')
   if (!category) {
    return <div>Category not found.</div>;
  };
  return <ProgramCategoryPage category={category} />;
}
