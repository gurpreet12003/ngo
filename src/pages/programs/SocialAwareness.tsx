import ProgramCategoryPage from '../../components/ProgramCategoryPage';
import { programCategories } from '../../data/siteData';

export default function SocialAwareness() {
  const category = programCategories.find((c) => c.slug === 'social-awareness')!;
  return <ProgramCategoryPage category={category} />;
}
