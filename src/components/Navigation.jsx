import { useState } from 'react';
import { Menu, X, FileText, TrendingUp, Target, Code, Rocket } from 'lucide-react';

const Navigation = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'market', label: 'Market Analysis', icon: TrendingUp },
    { id: 'opportunities', label: 'Opportunities', icon: Target },
    { id: 'roadmap', label: 'Strategic Roadmap', icon: Rocket },
    { id: 'technical', label: 'Technical Specs', icon: Code },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden bg-primary text-primary-foreground p-2 rounded-lg shadow-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation sidebar */}
      <nav className={`
        fixed top-0 left-0 h-full w-64 bg-card border-r border-border z-40 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-xl font-bold text-primary">RidM Gateway</h1>
            <p className="text-sm text-muted-foreground">Product Playbook</p>
          </div>

          <ul className="space-y-2">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <li key={section.id}>
                  <button
                    onClick={() => {
                      setActiveSection(section.id);
                      setIsOpen(false);
                    }}
                    className={`
                      w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors
                      ${activeSection === section.id 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                      }
                    `}
                  >
                    <Icon size={18} />
                    <span>{section.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;

