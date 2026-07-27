import ProgramCategoryPage from '../../components/ProgramCategoryPage';
import { programCategories } from '../../data/siteData';

export default function TribalEmpowerment() {
  const category = programCategories.find((c) => c.slug === 'tribal-empowerment')
   if (!category) {
    return <div>Category not found.</div>;
  };
  return <ProgramCategoryPage category={category} />;
}
