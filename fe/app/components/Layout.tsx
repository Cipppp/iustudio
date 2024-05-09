import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen"> {/* Full screen height */}
      <Sidebar />
      <div className="flex-1 pl-[16rem]"> {/* Prevent overflow */}
        {children}
      </div>
    </div>
  );
}
