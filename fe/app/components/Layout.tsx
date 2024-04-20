import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex">
      <Sidebar /> 
      <div className="flex-1 pl-[16rem]"> 
        {children}
      </div>
    </div>
  );
}
