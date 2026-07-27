import ProgramCategoryPage from '../../components/ProgramCategoryPage';
import { programCategories } from '../../data/siteData';

export default function EducationalGuidance() {
  const category = programCategories.find((c) => c.slug === 'education');

  if (!category) {
    return <div>Category not found.</div>;
  }

  return <ProgramCategoryPage category={category} />;
}