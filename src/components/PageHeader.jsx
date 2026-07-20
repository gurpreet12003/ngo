import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';


export default function PageHeader({ title, subtitle, breadcrumbs, bgImage }) {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      {bgImage && (
        <div className="absolute inset-0">
          <img src={bgImage} alt="" className="w-full h-full object-cover opacity-10" />
        </div>
      )}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {breadcrumbs && (
          <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5" />
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-gray-900 transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-gray-900 font-medium">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 font-serif">{title}</h1>
        {subtitle && <p className="mt-3 text-gray-600 max-w-2xl text-lg">{subtitle}</p>}
      </div>
    </div>
  );
}
