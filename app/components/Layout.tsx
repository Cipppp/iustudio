import Sidebar from './Sidebar';
import MenuWrapper from './MenuWrapper';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
      <div className="flex h-screen overflow-hidden"> {/* Full screen height and prevent overflow */}
          <MenuWrapper/>
          <div className="flex-1 overflow-hidden"> {/* Use full width and prevent overflow */}
              {children}
          </div>
      </div>
  );
}
