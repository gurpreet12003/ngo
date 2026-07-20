import ProgramCategoryPage from '../../components/ProgramCategoryPage';
import { programCategories } from '../../data/siteData';

export default function EducationalGuidance() {
  const category = programCategories.find((c) => c.slug === 'education')!;
  return <ProgramCategoryPage category={category} />;
}
